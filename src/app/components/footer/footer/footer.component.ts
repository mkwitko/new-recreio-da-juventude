import { environment } from './../../../../environments/environment.prod';
import { Component } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  iconType = '-sharp';

  public tabs = [
    {
      name: 'Inicio',
      icon: 'home' + this.iconType,
      path: 'home',
    },
    {
      name: 'Social',
      icon: 'at-circle' + this.iconType,
      path: 'social-home',
    },
    {
      name: 'Academia',
      icon: 'barbell' + this.iconType,
      path: 'academia-home',
    },
    {
      name: 'Eventos',
      icon: 'balloon' + this.iconType,
      path: 'eventos-home',
    },
    {
      name: 'Reservar',
      icon: 'sunny',
      path: '',
    },
  ];

  constructor(private navigation: NavigationService) {}

  goTo(url: string, link: string) {
    if (url) {
      this.navigation.goTo(url);
    }

    if (link) {
      this.navigation.away(link);
    }
  }
}
