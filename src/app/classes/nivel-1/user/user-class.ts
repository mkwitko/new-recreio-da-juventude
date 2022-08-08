import { environment } from 'src/environments/environment.prod';
import { CacheService } from '../../../services/cache/cache.service';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user/user';

@Injectable()
export class UserClass {
  public userLoginCredentials: User = {
    email: 'suporte@ezoom.com.br',
    password: '88888',
  };

  private info;
  private cachePath = environment.cache.nivel1.user;

  constructor(private cache: CacheService) {}

  /*
  Retorna Informações da Autenticação
  */
  getAuth(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .getCache(this.cachePath)
        .then((res) => {
          if (res) {
            resolve(res);
          } else {
            resolve(false);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /*
  Se o id da sessão existir -> Usuário Logado -> Retorna True
  */
  isLogged(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getAuth()
        .then((res) => {
          if (res !== false) {
            resolve(true);
          } else {
            resolve(res);
          }
        })
        .catch(() => {
          reject(false);
        });
    });
  }

  get() {
    return this.info;
  }

  getCachePath() {
    return this.cachePath;
  }

  getCache(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .getCache(this.cachePath)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  setClass() {
    this.getCache().then((cacheInfo) => {
      if (!cacheInfo) {
        this.getAuth().then((res) => {
          this.set(res);
          this.setCache();
        });
      } else {
        this.set(cacheInfo);
      }
    });
  }

  set(req) {
    this.info = req;
  }

  setCache() {
    this.cache.getCache(this.cachePath).then((res) => {
      if (!res) {
        this.cache.setCache(this.cachePath, this.get());
      }
    });
  }

  clear(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .removeCache(this.cachePath)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
