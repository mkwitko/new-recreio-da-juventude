import { CacheService } from './../../services/cache/cache.service';
import { EzoomApiService } from './../../services/api/ezoom-api.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class DependentClass {

  private info;
  private controller = environment.api.controllers.dependentes;
  private cachePath = environment.cache.dependent;

  constructor(
    private cache: CacheService,
    private api: EzoomApiService
  ) {}

  getDependentes(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controller)
      .then(res => {
        if(res.status)
        {
          resolve(res);
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

  getCachePath()
  {
    return this.cachePath;
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
        this.getDependentes().then(res => {
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
    console.log(this.info);
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
