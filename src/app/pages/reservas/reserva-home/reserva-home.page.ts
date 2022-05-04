import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { environment } from './../../../../environments/environment.prod';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reserva-home',
  templateUrl: './reserva-home.page.html',
  styleUrls: ['./reserva-home.page.scss'],
})
export class ReservaHomePage{

  whichReservation;

  public items = [
    {
      title: 'Reserva de Atividades',
      subtitle: 'Abaixo estão listados as atividades as quais os usuários tem acesso para reservar',
      whichReservation: environment.reservations[0]
    },
    {
      title: 'Reserva de Quadras',
      subtitle: 'Abaixo estão listados as quadras as quais os usuários tem acesso para reservar',
      whichReservation: environment.reservations[1]
    },
    {
      title: 'Reserva de Piscinas',
      subtitle: 'Abaixo estão listados as piscinas as quais os usuários tem acesso para reservar',
      whichReservation: environment.reservations[2]
    },
    {
      title: 'Reserva de Esportes Radicais',
      subtitle: 'Abaixo estão listados os esportes radicais as quais os usuários tem acesso para reservar',
      whichReservation: environment.reservations[3]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private navigation: NavigationService
  )
  {
    this.route.queryParams.subscribe(params => {
      if(params)
      {
        this.whichReservation = params.param;
        console.log(this.whichReservation);
      } else {
        this.navigation.goTo('reserva-atividade');
      }
    });
  }

}
