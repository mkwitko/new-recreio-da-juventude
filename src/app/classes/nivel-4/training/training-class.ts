import { UserClass } from 'src/app/classes/nivel-1/user/user-class';
import { HttpParams } from '@angular/common/http';
import { CacheService } from '../../../services/cache/cache.service';
import { EzoomApiService } from '../../../services/api/ezoom-api.service';
import { environment } from '../../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class TrainingClass {
  private info;
  private controllerTraining = environment.api.controllers.meusTreinos.get;
  private cachepathTraining = environment.cache.nivel4.training;

  constructor(
    private api: EzoomApiService,
    private cache: CacheService,
    private user: UserClass
  ) {}

  //Começo Funções My Tickets
  getTrainingHttp(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api
        .post(
          this.controllerTraining,
          new HttpParams()
            .set('associado', this.user.get().data.id)
            .set('sequencia', this.user.get().data.sequency)
        )
        .then((res) => {
          if (res.status) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getTrainingInfo() {
    return this.info;
  }

  getTrainingCache(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .getCache(this.cachepathTraining)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  setTraining(req) {
    this.info = req;
  }

  setTrainingCache() {
    this.cache.getCache(this.cachepathTraining).then(() => {
      this.cache.setCache(this.cachepathTraining, this.getTrainingInfo());
    });
  }

  clear(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .removeCache(this.cachepathTraining)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
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

  setClassTraining() {
    // Retorna informação do cache
    this.getTrainingCache().then((cacheInfo) => {
      //null ou valor do cache
      this.setTraining(cacheInfo);

      this.getTrainingHttp().then((res) => {
        // Atualiza cache
        this.setTraining(res);
        this.setTrainingCache();
      });
    });
  }
  // Fim

  setClass() {
    this.setClassTraining();
  }
}
