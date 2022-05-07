import { environment } from './../../../../environments/environment.prod';
import { CacheService } from './../../../services/cache/cache.service';
import { EzoomApiService } from './../../../services/api/ezoom-api.service';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class FieldsClass {

  private info: {data: any};

  private controllerGet = environment.api.controllers.reservations.fields.getAll;
  private controllerGetById = environment.api.controllers.reservations.fields.getById;
  private controllerGetSchedule = environment.api.controllers.reservations.fields.getSchedule;
  private controllerReserve = environment.api.controllers.reservations.fields.reserve;

  private cachePath = environment.cache.nivel4.fields;

  constructor(
    private api: EzoomApiService,
    private cache: CacheService
  ) {}
  // //Começo Funções My Tickets
  getFieldsHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerGet)
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

  getFieldsInfo()
  {
    return this.info.data;
  }

  getFieldsCache(): Promise<any>
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

  setFields(req)
  {
    this.info = req;
  }

  setFieldsCache()
  {
    this.cache.getCache(this.cachePath).then(() => {
      this.cache.setCache(this.cachePath, this.getFieldsInfo());
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

  /*
  Requisição

  Já existe em cache?
    -> Sim
      -> É igual à requisição?
        -> Sim -> Seta variavel
        -> Não -> Seta variavel + Cache

    -> Não -> Seta variavel + Cache
  */

  setClassFields()
    {
      // Retorna informação do cache
      this.getFieldsCache().then(cacheInfo => {

        //null ou valor do cache
        this.setFields(cacheInfo);

        this.getFieldsHttp().then(res => {
          // Atualiza cache
          this.setFields(res);
          this.setFieldsCache();
        });
      });
  }
  // Fim

  setClass()
  {
    this.setClassFields();
  }

  getFieldsByIdHttp(id: string, sequency: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerGetById + id, new HttpParams()
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

  reserve(id: string, sequency: string, date, partners): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.controllerReserve + id, new HttpParams()
      .set('date', date.day)
      .set('hour', date.hour)
      .set('sequency', sequency)
      .set('partners', partners))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  getSchedule(id: string, day): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerGetSchedule + id, new HttpParams()
      .set('day', day))
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
}
