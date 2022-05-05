import { DependentClass } from '../../../classes/nivel-2/dependentes/dependent-class';
import { LocationManagerClass } from '../../../classes/nivel-3/locations/location-manager-class';
import { Component } from '@angular/core';
import { KioskClass } from 'src/app/classes/nivel-4/kiosks/kiosk-class';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent{

  constructor(
    private locationManager: LocationManagerClass,
    private dependendentManager: DependentClass,
    private kioskClass: KioskClass
  ) { }

  reserve()
  {
    this.kioskClass.reservation(this.locationManager.get().data.id, this.dependendentManager.dependentData)
    .then(res => {
      console.log(res);
    });
  }

}
