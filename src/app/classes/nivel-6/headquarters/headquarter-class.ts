import { environment } from '../../../../environments/environment.prod';
import { EzoomApiService } from '../../../services/api/ezoom-api.service';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/services/cache/cache.service';

@Injectable()
export class HeadquarterClass{

  private info;
  private controller = environment.api.controllers.headquarters;
  private cachePath = environment.cache.nivel6.headquarters;

  constructor(
    private cache: CacheService,
    private api: EzoomApiService
  ) {}

  getHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controller)
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

  get()
  {
    return this.info;
  }

  getCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachePath)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setClass()
  {
    this.getCache().then(cacheInfo => {
      if(!cacheInfo)
      {
        this.getHttp().then(res => {
          this.set(res);
          this.setCache();
        });
      } else
      {
        this.set(cacheInfo);
      }
    });
  }

  set(req)
  {
    this.info = req;
  }

  setCache()
  {
    this.cache.getCache(this.cachePath).then(res => {
      if(!res)
      {
        this.cache.setCache(this.cachePath, this.get());
      }
    });
  }

  clear(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachePath)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }
}
