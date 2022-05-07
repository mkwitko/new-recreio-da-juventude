import { CacheService } from './../../../services/cache/cache.service';
import { EzoomApiService } from './../../../services/api/ezoom-api.service';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class GymClass {

  private info;
  private controllerGym = environment.api.controllers.reservations.gym.getActivity;
  private controllerGymReserve = environment.api.controllers.reservations.gym.reserveActivity;
  private cachepathGym = environment.cache.nivel4.gym;

  constructor(
    private api: EzoomApiService,
    private cache: CacheService
  ) {}

  //Começo Funções My Tickets
  getGymHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerGym)
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

  getGymInfo()
  {
    return this.info;
  }

  getGymCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachepathGym)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setGym(req)
  {
    this.info = req;
  }

  setGymCache()
  {
    this.cache.getCache(this.cachepathGym).then(() => {
      this.cache.setCache(this.cachepathGym, this.getGymInfo());
    });
  }

  clear(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachepathGym)
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

  setClassGym()
    {
      // Retorna informação do cache
      this.getGymCache().then(cacheInfo => {

        //null ou valor do cache
        this.setGym(cacheInfo);

        this.getGymHttp().then(res => {
          // Atualiza cache
          this.setGym(res);
          this.setGymCache();
        });
      });
  }
  // Fim

  setClass()
  {
    this.setClassGym();
  }

  reserve(id: string, sequency: string, date): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.controllerGymReserve + id, new HttpParams()
      .set('date', date.day)
      .set('hour', date.hour)
      .set('sequency', sequency))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}
