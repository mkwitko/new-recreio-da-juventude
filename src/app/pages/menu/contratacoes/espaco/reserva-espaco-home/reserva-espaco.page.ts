import { ReservaEspacoManagerClass } from '../../../../../classes/nivel-3/ManagerEspacoLocalizacao/reserva-espaco-manager-class';
import { DependentClass } from '../../../../../classes/nivel-2/dependentes/dependent-class';
import { LocationManagerClass } from '../../../../../classes/nivel-3/locations/location-manager-class';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { ScreenService } from '../../../../../services/screen/screen.service';
import { Component } from '@angular/core';
import { KioskClass } from 'src/app/classes/nivel-4/kiosks/kiosk-class';

@Component({
  selector: 'app-reserva-espaco',
  templateUrl: './reserva-espaco.page.html',
  styleUrls: ['./reserva-espaco.page.scss'],
})
export class ReservaEspacoPage{

  constructor(
    public reserveLocationDependentClass: ReservaEspacoManagerClass,
    private locationManager: LocationManagerClass,
    private dependentClass: DependentClass,
    private kioskClass: KioskClass,
    private screen: ScreenService,
    private navigation: NavigationService
  ) { }

  async info(value)
  {
    await this.screen.presentLoading();
    this.kioskClass.getKioskByIdHttp(value.id, this.dependentClass.dependentData)
    .then(res => {
      if(res.status)
      {
        this.locationManager.set(res);
        this.navigation.goTo('reserva-espaco-details');
        console.log(res);
      }
    })
    .catch(() => {
      this.screen.presentToast('Serviço fora do Ar. Contate seu provedor');
    })
    .finally(() => {
      this.screen.loadingDismiss();
    });
  }

  callAlertReserve()
  {
    // this.screen.presentAlertConfirm()
  }

  async reserve(value)
  {
    await this.screen.presentLoading();
    this.kioskClass.reserve(value.id, this.dependentClass.dependentData)
    .then(res => {
      if(res.status)
      {
        this.screen.presentToast('Reserva Feita com Sucesso!', 'sucess');
      }
      else if (!res.status)
      {
        this.screen.presentToast(res.data.message);
      }
    }).
    catch(err => {
      this.screen.presentToast('Erro desconhecido');
    })
    .finally(() => {
      this.screen.loadingDismiss();
    });
  }
}
