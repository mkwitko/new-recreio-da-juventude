import { CacheService } from './../../../services/cache/cache.service';
import { EzoomApiService } from './../../../services/api/ezoom-api.service';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class SchoolClass {

  private info;
  private controllerSchool = environment.api.controllers.reservations.school.getSchools;
  private controllerSchoolById = environment.api.controllers.reservations.school.getSchool;
  private controllerSchoolReserve = environment.api.controllers.reservations.school.reserveSchool;
  private cachepathSchool = environment.cache.nivel4.school;

  constructor(
    private api: EzoomApiService,
    private cache: CacheService
  ) {}

  //Começo Funções My Tickets
  getSchoolHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerSchool)
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

  getSchoolInfo()
  {
    return this.info;
  }

  getSchoolCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachepathSchool)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setSchool(req)
  {
    this.info = req;
  }

  setSchoolCache()
  {
    this.cache.getCache(this.cachepathSchool).then(() => {
      this.cache.setCache(this.cachepathSchool, this.getSchoolInfo());
    });
  }

  clear(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachepathSchool)
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

  setClassSchool()
  {
      // Retorna informação do cache
      this.getSchoolCache().then(cacheInfo => {

        //null ou valor do cache
        this.setSchool(cacheInfo);

        this.getSchoolHttp().then(res => {
          // Atualiza cache
          this.setSchool(res);
          this.setSchoolCache();
        });
      });
  }

  setClass()
  {
    this.setClassSchool();
  }

  getSchoolByIdHttp(id: string, sequency: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerSchoolById + id, new HttpParams()
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
      this.api.post(this.controllerSchoolReserve + id, new HttpParams()
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
