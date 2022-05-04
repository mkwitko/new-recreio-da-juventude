import { environment } from './../../../environments/environment.prod';
import { EzoomApiService } from './../../services/api/ezoom-api.service';
import { Injectable } from '@angular/core';
import { CacheService } from 'src/app/services/cache/cache.service';

@Injectable()
export class BannerClass{

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
