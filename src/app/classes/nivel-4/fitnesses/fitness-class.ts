import { CacheService } from './../../../services/cache/cache.service';
import { EzoomApiService } from './../../../services/api/ezoom-api.service';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class FitnessClass {

  private info;
  private controllerFitness = environment.api.controllers.reservations.fitness.getFitness;
  private cachepathFitness = environment.cache.nivel4.fitness;

  constructor(
    private api: EzoomApiService,
    private cache: CacheService
  ) {}

  //Começo Funções My Tickets
  getFitnessHttp(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.controllerFitness)
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

  getFitnessInfo()
  {
    return this.info;
  }

  getFitnessCache(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.getCache(this.cachepathFitness)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  setFitness(req)
  {
    this.info = req;
  }

  setFitnessCache()
  {
    this.cache.getCache(this.cachepathFitness).then(() => {
      this.cache.setCache(this.cachepathFitness, this.getFitnessInfo());
    });
  }

  clear(): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.cache.removeCache(this.cachepathFitness)
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

  setClassFitness()
    {
      // Retorna informação do cache
      this.getFitnessCache().then(cacheInfo => {

        //null ou valor do cache
        this.setFitness(cacheInfo);

        this.getFitnessHttp().then(res => {
          // Atualiza cache
          this.setFitness(res);
          this.setFitnessCache();
        });
      });
  }
  // Fim

  setClass()
  {
    this.setClassFitness();
  }
}
