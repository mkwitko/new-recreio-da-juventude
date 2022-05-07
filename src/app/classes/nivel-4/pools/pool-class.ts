import { CacheService } from './../../../services/cache/cache.service';
import { EzoomApiService } from './../../../services/api/ezoom-api.service';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class PoolClass {

  private info;
  private controllerPool = environment.api.controllers.reservations.pool.getFreePools;
  private controllerPoolById = environment.api.controllers.reservations.pool.getPool;
  private controllerPoolReserve = environment.api.controllers.reservations.pool.reservePool;
  private cachepathPool = environment.cache.nivel4.pool;

  constructor(
    private api: EzoomApiService,
    private cache: CacheService
  ) {}

  //Começo Funções My Tickets
  getPoolHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerPool)
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

  getPoolInfo()
  {
    return this.info;
  }

  getPoolCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachepathPool)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setPool(req)
  {
    this.info = req;
  }

  setPoolCache()
  {
    this.cache.getCache(this.cachepathPool).then(() => {
      this.cache.setCache(this.cachepathPool, this.getPoolInfo());
    });
  }

  clear(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachepathPool)
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

  setClassPool()
    {
      // Retorna informação do cache
      this.getPoolCache().then(cacheInfo => {

        //null ou valor do cache
        this.setPool(cacheInfo);

        this.getPoolHttp().then(res => {
          // Atualiza cache
          this.setPool(res);
          this.setPoolCache();
        });
      });
  }
  // Fim

  setClass()
  {
    this.setClassPool();
  }

  getPoolByIdHttp(id: string, sequency: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerPoolById + id, new HttpParams()
      .set('sequency', sequency))
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

  reserve(id: string, sequency: string, date): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.controllerPoolReserve + id, new HttpParams()
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
