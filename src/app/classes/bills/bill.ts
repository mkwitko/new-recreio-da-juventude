import { CacheService } from './../../services/cache/cache.service';
import { Injectable } from '@angular/core';
import { EzoomApiService } from 'src/app/services/api/ezoom-api.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class BillClass {

  private info;
  private controller = environment.api.controllers.banner;
  private cachePath = environment.cache.user;

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
            resolve(res.data);
          }
        })
        .catch(err => {
          reject(err);
        });
      });
    }

    clear()
    {
      this.cache.removeCache(this.cachePath);
    }

    get()
    {
      return this.info;
    }

    set(req)
    {
      this.info = req;
    }
}
