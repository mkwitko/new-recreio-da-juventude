import { ReservaEspacoManagerClass } from '../../../classes/nivel-3/ManagerEspacoLocalizacao/reserva-espaco-manager-class';
import { ReserveGeneralClass } from '../../../classes/nivel-3/general/reserve-general-class';
import { LocationManagerClass } from '../../../classes/nivel-3/locations/location-manager-class';
import { Component } from '@angular/core';
import { MasterReqService } from 'src/app/services/master/master-req.service';

@Component({
  selector: 'app-location-select',
  templateUrl: './location-select.component.html',
  styleUrls: ['./location-select.component.scss'],
})
export class LocationSelectComponent {

  public items = [
    'Quiosques', 'Salões'
  ];

  constructor(
    private reserveLocationDependentClass: ReservaEspacoManagerClass,
    private locationManager: LocationManagerClass
  ) {}

  select(event)
  {
    this.locationManager.clear();
    const selectedValue = event.detail.value;
    this.get(selectedValue);
  }

  get(selectedValue)
  {
    if(selectedValue.toLowerCase() === this.items[0].toLowerCase())
    {
      console.log(this.locationManager.kioskClass.getKioskInfo());
      this.locationManager.set(this.locationManager.kioskClass.getKioskInfo());
    }
    else if(selectedValue.toLowerCase() === this.items[1].toLowerCase())
    {
      this.locationManager.set(this.locationManager.salonClass.getSalonInfo());
    }
    this.reserveLocationDependentClass.getResponseLocationDependent();
  }

}
