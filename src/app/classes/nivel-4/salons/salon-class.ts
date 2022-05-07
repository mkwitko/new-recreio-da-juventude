import { CacheService } from './../../../services/cache/cache.service';
import { EzoomApiService } from './../../../services/api/ezoom-api.service';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class SalonClass {

  private info;
  private controllerSalon = environment.api.controllers.reservations.salon.getSalons;
  private controllerSalonById = environment.api.controllers.reservations.salon.getSalonsDetails;
  private controllerSalonReserve = environment.api.controllers.reservations.salon.reserveSalon;
  private cachepathSalon = environment.cache.nivel4.salon;

  constructor(
    private api: EzoomApiService,
    private cache: CacheService
  ) {}

  //Começo Funções My Tickets
  getSalonHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerSalon)
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

  getSalonInfo()
  {
    return this.info;
  }

  getSalonCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachepathSalon)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setSalon(req)
  {
    this.info = req;
  }

  setSalonCache()
  {
    this.cache.getCache(this.cachepathSalon).then(() => {
      this.cache.setCache(this.cachepathSalon, this.getSalonInfo());
    });
  }

  clear(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachepathSalon)
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

  setClassSalon()
    {
      // Retorna informação do cache
      this.getSalonCache().then(cacheInfo => {

        //null ou valor do cache
        this.setSalon(cacheInfo);

        this.getSalonHttp().then(res => {
          // Atualiza cache
          this.setSalon(res);
          this.setSalonCache();
        });
      });
  }
  // Fim

  setClass()
  {
    this.setClassSalon();
  }

  getSalonByIdHttp(id: string, sequency: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerSalonById + id, new HttpParams()
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
      this.api.post(this.controllerSalonReserve + id, new HttpParams()
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
