import { Injectable } from '@angular/core';
import { KioskClass } from '../../nivel-4/kiosks/kiosk-class';
import { SalonClass } from '../../nivel-4/salons/salon-class';

@Injectable()
export class LocationManagerClass {

  public locationData;
  private locationSelected;

  constructor(
    public kioskClass: KioskClass,
    public salonClass: SalonClass
  ) {}

  get()
  {
    return this.locationData;
  }

  set(req)
  {
    this.locationData = req;
  }

  clear()
  {
    this.locationData = null;
  }

}
