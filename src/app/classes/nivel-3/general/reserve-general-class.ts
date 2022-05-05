import { EzoomApiService } from '../../../services/api/ezoom-api.service';
import { CacheService } from '../../../services/cache/cache.service';
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ReserveGeneralClass {

  private locationSelected;

  private getReservesController = environment.api.controllers.reservations.general.get;
  private postCancelReservesController = environment.api.controllers.reservations.general.cancelReserve;


  constructor(
    private api: EzoomApiService
  ) {}

  getReserves(type: string, sequency: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.get(this.getReservesController, new HttpParams()
      .set('type', type)
      .set('sequency', sequency))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

  cancelReserves(reserveId: string, reserveType: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      this.api.post(this.postCancelReservesController, new HttpParams()
      .set('id', reserveId)
      .set('type', reserveType))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
    });
  }

}
