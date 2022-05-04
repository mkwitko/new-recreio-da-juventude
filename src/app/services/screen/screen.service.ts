import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(
    private loadingController: LoadingController,
    private toastr: ToastrService,
    private actionSheetController: ActionSheetController
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

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      },
      {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

  actionSheetDismiss()
  {
    this.actionSheetController.dismiss();
  }
}
