import { Injectable } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private menu: MenuController
  ) { }

  /*
    Abertura de menu lateral
    Principal uso: Menu Hamburguer
  */
  open()
  {
    this.menu.open();
  }

  /*
    Fechar menu lateral.
    Principal uso: Ao selecionar alguma opção do menu e logout
  */
  close()
  {
    this.menu.close();
  }
}
