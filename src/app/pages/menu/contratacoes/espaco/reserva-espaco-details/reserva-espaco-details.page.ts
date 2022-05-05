import { LocationManagerClass } from '../../../../../classes/nivel-3/locations/location-manager-class';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-espaco-details',
  templateUrl: './reserva-espaco-details.page.html',
  styleUrls: ['./reserva-espaco-details.page.scss'],
})
export class ReservaEspacoDetailsPage{

  constructor(
    public locationManager: LocationManagerClass,
    private navigation: NavigationService
  )
  {
    if(!this.locationManager.get())
    {
      this.navigation.goTo('reserva-espaco');
    }
  }

}
