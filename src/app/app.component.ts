import { MenuService } from './services/menu/menu.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { MasterReqService } from './services/master/master-req.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  // Sharp, Outline, Fill
  iconType = '-outline';

  public itens = [
    {
      name: 'Contratações',
      dropdown: [
        {
          name: 'Reserva de Atividades',
          icon: 'bicycle' + this.iconType,
          path: 'reserva-atividade'
        },
        {
          name: 'Reserva de Espaços',
          icon: 'balloon' + this.iconType,
          path: 'reserva-espaco'
        },
        {
          name: 'Compra de Ingressos',
          icon: 'ticket' + this.iconType,
          path: 'compra-ingresso'
        },
        {
          name: 'Contratação de Serviços',
          icon: 'bag-check' + this.iconType,
          path: 'contratacao-servico'
        },
        {
          name: 'Pagamentos',
          icon: 'cash' + this.iconType,
          path: 'pagamentos'
        },
        {
          name: 'Pagamentos',
          icon: 'cash' + this.iconType,
          path: 'pagamentos'
        }
      ]
    },
    {
      name: 'Clube',
      dropdown: [
        {
          name: 'Mapa do Clube',
          icon: 'map' + this.iconType,
          path: 'mapa-clube'
        },
        {
          name: 'Eventos',
          icon: 'earth' + this.iconType,
          path: 'eventos'
        },
        {
          name: 'Convênios',
          icon: 'documents' + this.iconType,
          path: 'convenios'
        }
      ]
    },
    {
      name: 'Suporte',
      dropdown: [
        {
          name: 'Dúvidas Frequentes',
          icon: 'help' + this.iconType,
          path: 'duvidas-frequentes'
        },
        {
          name: 'Fale Conosco',
          icon: 'headset' + this.iconType,
          path: 'fale-conosco'
        }
      ]
    },
    {
      name: 'Minha conta',
      dropdown: [
        {
          name: 'Dados',
          icon: 'reader' + this.iconType,
          path: 'meus-dados'
        },
        {
          name: 'Ingressos',
          icon: 'ticket' + this.iconType,
          path: 'meus-ingressos'
        },
        {
          name: 'Treinos',
          icon: 'barbell' + this.iconType,
          path: 'meus-treinos'
        },
        {
          name: 'Reservas',
          icon: 'key' + this.iconType,
          path: 'minhas-reservas'
        },
        {
          name: 'Dependentes',
          icon: 'people' + this.iconType,
          path: 'meus-dependentes'
        },
        {
          name: 'Lista de Espera',
          icon: 'pause-circle' + this.iconType,
          path: 'lista-espera'
        },
        {
          name: 'Serviços Contratados',
          icon: 'layers' + this.iconType,
          path: 'servicos-contratados'
        }
      ]
    }
  ];

  constructor(
    private navigation: NavigationService,
    private menuCtrl: MenuService,
    private auth: AuthService,
    private master: MasterReqService
  )
  {
    this.master.getAll();
  }

  logout()
  {
    this.menuCtrl.close();
    this.auth.logout();
  }

  goTo(url: string)
  {
    this.navigation.goTo(url);
    this.menuCtrl.close();
  }
}
