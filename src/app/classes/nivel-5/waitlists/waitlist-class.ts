import { environment } from '../../../../environments/environment.prod';
import { EzoomApiService } from '../../../services/api/ezoom-api.service';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/services/cache/cache.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class WaitlistClass{

  private waitList;

  //service: id_service
  private controllerWaitlist = environment.api.controllers.waitList.get;


  private controllerEnterWaitlist = environment.api.controllers.waitList.enter;
  private controllerLeaveWaitlist = environment.api.controllers.waitList.leave;


  private cachePathWaitlist = environment.cache.nivel5.waitlist;

  constructor(
    private cache: CacheService,
    private api: EzoomApiService
  ) {}

  //Começo Funções My Tickets
  getWaitlistHttp(id?: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerWaitlist, new HttpParams()
      .set('service', id))
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

  getWaitlistInfo()
  {
    return this.waitList;
  }

  getWaitlistCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachePathWaitlist)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setWaitlist(req)
  {
    this.waitList = req;
  }

  setWaitlistCache()
  {
    this.cache.getCache(this.cachePathWaitlist).then(() => {
      this.cache.setCache(this.cachePathWaitlist, this.getWaitlistInfo());
    });
  }

  clearWaitlist(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachePathWaitlist)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
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

  setClassWaitlist()
    {
      // Retorna informação do cache
      this.getWaitlistCache().then(cacheInfo => {

        this.getWaitlistHttp().then(res => {

          //Preenche variavel
          this.setWaitlist(res);

          //Se já existir em cache
          if(cacheInfo)
          {
            // E a requisição http for diferente
            if(cacheInfo !== res)
            {
              // Atualiza cache
              this.setWaitlistCache();
            }
          }
          else
          {
            // Se não existir cache, preenche
            this.setWaitlistCache();
          }
        });
      });
  }
  // Fim
  enterWaitlist(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.controllerEnterWaitlist, new HttpParams())
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  leaveWaitlist(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.controllerLeaveWaitlist, new HttpParams())
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  // Funções Gerais
  setClass()
  {
    this.setClassWaitlist();
  }


}
