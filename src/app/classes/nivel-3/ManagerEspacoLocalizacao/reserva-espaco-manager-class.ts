import { environment } from '../../../../environments/environment';
import { CacheService } from 'src/app/services/cache/cache.service';
import { DependentClass } from '../../nivel-2/dependentes/dependent-class';
import { LocationManagerClass } from '../locations/location-manager-class';
import { Injectable } from '@angular/core';

@Injectable()
export class ReservaEspacoManagerClass {

  public avaliableData;

  private cachePath = environment.cache.nivel3.managerEspacoLocalizacao.selected;

  constructor(
    private locationManager: LocationManagerClass,
    private dependentClass: DependentClass,
    private cache: CacheService
  ) {}

  getResponseLocationDependent()
  {
    console.log(this.locationManager.locationData, this.dependentClass.dependentData);
    if(this.locationManager.locationData && this.dependentClass.dependentData)
    {
      console.log('b');
      for(const a of this.locationManager.locationData)
      {
        console.log(a);
        if(a.sequency === this.dependentClass.dependentData)
        {
          this.avaliableData = a.items;
        }
      }
    }
  }

  set(req)
  {
    this.avaliableData = req;
  }

  getCache(): Promise<any>
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
}
