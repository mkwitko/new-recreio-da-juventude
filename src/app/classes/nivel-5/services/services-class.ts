import { environment } from '../../../../environments/environment.prod';
import { EzoomApiService } from '../../../services/api/ezoom-api.service';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/services/cache/cache.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ServicesClass{

  // Não Implementados
  //GetPrices, GetSchedule, getPricesSchedule, contract, sendSuggestTime

  private categorias;
  private contratados;

  private controllerCategorias = environment.api.controllers.services.get;
  private controlerGetContratados = environment.api.controllers.services.getContracted;
  private controllerCancelContratados = environment.api.controllers.services.cancelContract;
  private contrllersRenewContratados = environment.api.controllers.services.renewContract;

  // private controllerCategoriasById = environment.api.controllers.services.getById;


  private cachePathCategorias = environment.cache.nivel5.services.categorias;
  private cachePathContratados = environment.cache.nivel5.services.contratados;

  constructor(
    private cache: CacheService,
    private api: EzoomApiService
  ) {}

  //Começo Funções Categorias
  getCategoriaHttp(id: string = ''): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerCategorias + id)
      .then(res => {
        if(res.status)
        {
          resolve(res.data);
        }
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getCategoriaInfo()
  {
    return this.categorias;
  }

  getCategoriaCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachePathCategorias)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setCategoria(req)
  {
    this.categorias = req;
  }

  setCategoriaCache()
  {
    this.cache.getCache(this.cachePathCategorias).then(res => {
      if(!res)
      {
        this.cache.setCache(this.cachePathCategorias, this.getCategoriaInfo());
      }
    });
  }

  clearCategoria(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachePathCategorias)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
  // Fim

  //Começo Funções Contratados
  getContratadoHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controlerGetContratados)
      .then(res => {
        if(res.status)
        {
          resolve(res.data);
        }
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getContratadoInfo()
  {
    return this.contratados;
  }

  getContratadoCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachePathContratados)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setContratado(req)
  {
    this.contratados = req;
  }

  setContratadoCache()
  {
    this.cache.getCache(this.cachePathContratados).then(() => {
      this.cache.setCache(this.cachePathContratados, this.getContratadoInfo());
    });
  }

  clearContratado(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachePathContratados)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  cancelContratado(id: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.controllerCancelContratados, new HttpParams()
      .set('id', id))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  renewContratado(id: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.contrllersRenewContratados, new HttpParams()
      .set('id', id))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  // Fim

    // Funções Gerais
  setClass()
  {
    this.setClassCategoria();
    this.setClassContratado();
  }

  setClassCategoria()
  {
    this.getCategoriaCache().then(cacheInfo => {
      if(!cacheInfo)
      {
        this.getCategoriaHttp().then(res => {
          this.setCategoria(res);
          this.setCategoriaCache();
        });
      } else
      {
        this.setCategoria(cacheInfo);
      }
    });
  }

  /*
  Requisição

  Já existe em cache?
    -> Sim
      -> É igual à requisição?
        -> Sim -> Seta variavel
        -> Não -> Seta variavel + Cache

    -> Não -> Seta variavel + Cache
  */
  setClassContratado()
  {
    // Retorna informação do cache
    this.getContratadoCache().then(cacheInfo => {

      this.getContratadoHttp().then(res => {

        //Preenche variavel
        this.setContratado(res);

        //Se já existir em cache
        if(cacheInfo)
        {
          // E a requisição http for diferente
          if(cacheInfo !== res)
          {
            // Atualiza cache
            this.setContratadoCache();
          }
        }
        else
        {
          // Se não existir cache, preenche
          this.setContratadoCache();
        }
      });
    });
  }
}
