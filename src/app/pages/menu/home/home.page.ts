import { BannerClass } from './../../../classes/nivel-6/banners/banner';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  path = '../../../../assets/img/';

  public itens = [
    {
      name: 'Reserva de Atividades',
      img: this.path + 'logo-white.png',
      url: 'reserva-atividade'
    },
    {
      name: 'Reserva de Espaços',
      img: this.path + 'logo-white.png',
      url: 'reserva-espaco'
    },
    {
      name: 'Minhas Reservas',
      img: this.path + 'logo-white.png',
      url: 'minhas-reservas'
    },
    {
      name: 'Compra de Ingressos',
      img: this.path + 'logo-white.png',
      url: 'compra-ingresso'
    },
    {
      name: 'Contratação de Serviços',
      img: this.path + 'logo-white.png',
      url: 'contratacao-servico'
    },
    {
      name: 'Meus Treinos',
      img: this.path + 'logo-white.png',
      url: 'meus-treinos'
    }
  ];

  public slides = [
    {
      img: this.path + 'background.jpg',
      alt: 'alt alt alt'
    },
    {
      img: this.path + 'logo_110Anos.png',
      alt: 'alt alt alt'
    },
    {
      img: this.path + 'ju.png',
      alt: 'alt alt alt'
    },
    {
      img: this.path + 'logo_110Anos.png',
      alt: 'alt alt alt'
    }
  ];

  constructor(
    public bannerClass: BannerClass,
    private navigation: NavigationService
  ) { }

  goTo(url: string)
  {
    this.navigation.goTo(url);
  }

}
