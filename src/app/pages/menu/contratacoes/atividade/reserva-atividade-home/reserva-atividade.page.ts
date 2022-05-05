import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { environment } from './../../../../../../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reserva-atividade',
  templateUrl: './reserva-atividade.page.html',
  styleUrls: ['./reserva-atividade.page.scss'],
})
export class ReservaAtividadePage  {

  public items = [
    {
      name: 'Ginástica',
      svg: 'gym',
      path: environment.reservations[0]
    },
    {
      name: 'Quadras',
      svg: 'tennis',
      path: environment.reservations[1]
    },
    {
      name: 'Natação',
      svg: 'swim',
      path: environment.reservations[2]
    },
    {
      name: 'Esportes Radicais',
      svg: 'sport',
      path: environment.reservations[3]
    }
  ];


  constructor(
    private navigation: NavigationService
  ) { }

  goTo(item)
  {
    this.navigation.goToParam('reserva-atividade-category', item.path);
  }

}
