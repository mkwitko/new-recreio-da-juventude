import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EzoomApiService } from 'src/app/services/api/ezoom-api.service';
import { CacheService } from 'src/app/services/cache/cache.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class KioskClass {

  private info;
  private controller = environment.api.controllers.reservations.kiosk.getAllKiosk;
  private controllerById = environment.api.controllers.reservations.kiosk.getKioskById;
  private controllerReserve = environment.api.controllers.reservations.kiosk.reserveKiosk;
  private cachePath = environment.cache.nivel4.kiosk;

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
          resolve(res);
        }
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getById(id: string, sequency: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerById + id, new HttpParams().set('sequency', sequency))
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

  getCache(cachePath): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(cachePath)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  reservation(id: string, sequency): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.controllerReserve + id, new HttpParams().set('sequency', sequency))
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
    this.getCache(this.cachePath).then(cacheInfo => {
      if(!cacheInfo)
      {
        this.getHttp().then(res => {
          this.set(res);
          this.setCache(this.cachePath);
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

  setCache(cachePath)
  {
    this.cache.getCache(cachePath).then(res => {
      if(!res)
      {
        this.cache.setCache(cachePath, this.get());
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
