import { environment } from './../../../../environments/environment.prod';
import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent{

  iconType = '-outline';

  public tabs = [
    {
      name: 'Home',
      icon: 'home' + this.iconType,
      path: 'home'
    },
    {
      name: 'Mapa do Clube',
      icon: 'map' + this.iconType,
      path: 'mapa-clube'
    },
    {
      name: 'Reserva de Atividades',
      icon: 'bicycle' + this.iconType,
      path: 'reserva-atividade'
    },
    {
      name: 'Whatsapp',
      icon: 'logo-whatsapp',
      link: environment.wpp
    },
  ];

  constructor(
    private navigation: NavigationService
  )
  {

  }

  goTo(url: string, link: string)
  {
    if(url)
    {
      this.navigation.goTo(url);
    }

    if(link)
    {
      this.navigation.away(link);
    }
  }

}
