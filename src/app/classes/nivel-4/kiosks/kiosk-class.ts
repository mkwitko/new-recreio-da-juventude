import { CacheService } from './../../../services/cache/cache.service';
import { EzoomApiService } from './../../../services/api/ezoom-api.service';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class KioskClass {

  private info;
  private controllerKiosk = environment.api.controllers.reservations.kiosk.getAllKiosk;
  private controllerKioskById = environment.api.controllers.reservations.kiosk.getKioskById;
  private controllerKioskReserve = environment.api.controllers.reservations.kiosk.reserveKiosk;
  private cachepathKiosk = environment.cache.nivel4.kiosk;

  constructor(
    private api: EzoomApiService,
    private cache: CacheService
  ) {}

  //Começo Funções My Tickets
  getKioskHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerKiosk)
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

  getKioskInfo()
  {
    return this.info;
  }

  getKioskCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachepathKiosk)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setKiosk(req)
  {
    this.info = req;
  }

  setKioskCache()
  {
    this.cache.getCache(this.cachepathKiosk).then(() => {
      this.cache.setCache(this.cachepathKiosk, this.getKioskInfo());
    });
  }

  clear(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachepathKiosk)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

setClassKiosk()
    {
      // Retorna informação do cache
      this.getKioskCache().then(cacheInfo => {

        //null ou valor do cache
        this.setKiosk(cacheInfo);

        this.getKioskHttp().then(res => {
          // Atualiza cache
          this.setKiosk(res);
          this.setKioskCache();
        });
      });
  }
  setClass()
  {
    this.setClassKiosk();
  }



  getKioskByIdHttp(id: string, sequency: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerKioskById + id, new HttpParams()
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

  reserve(id: string, sequency: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.controllerKioskReserve + id, new HttpParams()
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
