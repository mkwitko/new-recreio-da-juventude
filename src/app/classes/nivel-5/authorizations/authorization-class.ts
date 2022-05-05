import { environment } from '../../../../environments/environment.prod';
import { EzoomApiService } from '../../../services/api/ezoom-api.service';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/services/cache/cache.service';

@Injectable()
export class AuthClass{

  private politicaDePrivacidade;
  private termosDeAceite;

  //Id, sequency
  private controllerAceite = environment.api.controllers.authorization.getAutorizacao;

  private controllerPolitica = environment.api.controllers.authorization.getPolitica;

  //Att {'S': 'N'} Id, sequency -> NÃO ESTÁ FUNCIONANDO (?????)
  private controllerSetAceite = environment.api.controllers.authorization.set;

  private cachePathPolitica = environment.cache.nivel5.authorization.politica;
  private cachePathAceite = environment.cache.nivel5.authorization.aceite;

  constructor(
    private cache: CacheService,
    private api: EzoomApiService
  ) {}

  //Começo Funções Politica de Privacidade
  getPoliticaHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerPolitica)
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

  getPoliticaInfo()
  {
    return this.politicaDePrivacidade;
  }

  getPoliticaCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachePathPolitica)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setPolitica(req)
  {
    this.politicaDePrivacidade = req;
  }

  setPoliticaCache()
  {
    this.cache.getCache(this.cachePathPolitica).then(res => {
      if(!res)
      {
        this.cache.setCache(this.cachePathPolitica, this.getPoliticaInfo());
      }
    });
  }

  clearPolitica(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachePathPolitica)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
  // Fim

  // Começo Funções Termos de Aceite
  getAceiteHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerAceite)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getAceiteInfo()
  {
    return this.termosDeAceite;
  }

  getAceiteCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachePathAceite)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setAceite(req)
  {
    this.termosDeAceite = req;
    console.log(req);
  }

  setAceiteCache()
  {
    this.cache.getCache(this.cachePathAceite).then(res => {
      if(!res)
      {
        this.cache.setCache(this.cachePathAceite, this.getAceiteInfo());
      }
    });
  }

  clearAceite(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachePathAceite)
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
    this.getPoliticaCache().then(cacheInfo => {
      if(!cacheInfo)
      {
        this.getPoliticaHttp().then(res => {
          this.setPolitica(res);
          this.setPoliticaCache();
        });
      } else
      {
        this.setPolitica(cacheInfo);
      }
    });
    this.getAceiteCache().then(cacheInfo => {
      if(!cacheInfo)
      {
        this.getAceiteHttp().then(res => {
          this.setAceite(res);
          this.setAceiteCache();
        });
      } else
      {
        this.setAceite(cacheInfo);
      }
    });
  }


}
