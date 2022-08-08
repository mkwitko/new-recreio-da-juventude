import { ScreenService } from './../screen/screen.service';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  constructor(private storage: Storage, private screen: ScreenService) {
    this.iniStorage().catch(() => {
      this.screen.presentToast('Falha ao inicializar o Sistema de cache');
    });
  }

  /*
  Inicialização do Sistema de Cache
  É chamado com a inicialização do app e retorna um toast caso tenha dado erro.
  */
  iniStorage(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage
        .create()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /*
  Insere a informação value com a key obj
  */
  setCache(obj: string, value: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage
        .set(obj, value)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /*
  Limpa a key obj
  */
  removeCache(obj: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage
        .remove(obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /*
  Retorna a key obj
  */
  getCache(obj: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.storage
        .get(obj)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
