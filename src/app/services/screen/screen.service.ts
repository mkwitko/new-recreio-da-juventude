import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(
    private loadingController: LoadingController,
    private toastr: ToastrService,
    private alertController: AlertController
  ) { }

  /*
    Padrão toast de erro
    Sucess = Verde
    Error = Vermelho
    Warning = Amarelo
    Info = Azul
  */
  public async presentToast(message: string, type = 'error', title?: string) {
    if(type === 'sucess'){
      this.toastr.success(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'error'){
      this.toastr.error(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'warning'){
      this.toastr.warning(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    } else if (type === 'info'){
      this.toastr.info(message, title, {closeButton: true, extendedTimeOut: 2000, progressBar: true});
    }
  }

  /*
  Necessário chamar este metodo de forma assincrona
  Alterar css via global.scss
  */
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-loading',
      message: 'Aguarde...'
    });
    await loading.present();
  }

  loadingDismiss()
  {
    this.loadingController.dismiss();
  }

  async presentAlertConfirm(message: string, func, header='', cssClass='') {
    const alert = await this.alertController.create({
      cssClass,
      header,
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button'
        },
        {
          text: 'Confirmar',
          id: 'confirm-button',
          handler: () => {
            func();
          }
        }
      ]
    });

    await alert.present();
  }
}
