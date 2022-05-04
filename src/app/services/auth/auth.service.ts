import { MasterReqService } from './../master/master-req.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { UserClass } from 'src/app/classes/user/user-class';
import { AllowToPassService } from './../allow-to-pass/allow-to-pass.service';
import { ScreenService } from './../screen/screen.service';
import { environment } from './../../../environments/environment.prod';
import { EzoomApiService } from './../api/ezoom-api.service';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from '../cache/cache.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private api: EzoomApiService,
    private screen: ScreenService,
    private allow: AllowToPassService,
    private userClass: UserClass,
    private cache: CacheService,
    private navigation: NavigationService,
    private master: MasterReqService
  ) { }


  /*
  Necessário receber e-mail e senha
  Caso faça a conexão:

    ** Then -> Retorna res.tatus === true caso usuário exista
      ** Configura informações do usuário na UserClass (src/app/classes/users/user) e adiciona a id de sessão em cache

    ** Catch -> Conexão falhou

    ** Finally -> Este trecho do código sempre é chamado.
    Envia para a home, porém, se id da sessão for nulo, o usuário não será redirecionado devido às guards (src/app/guards)
  */
  async login(body): Promise<any>
  {
    if(this.allow.guardian([body.email, body.password]))
    {
      const params = this.makeParams(body);
      await this.screen.presentLoading();
      this.api.get(environment.api.controllers.user.login, params)
      .then(res => {
        if(res.status)
        {
          this.userClass.set(res);
          this.cache.setCache(this.userClass.getCachePath(), this.userClass.get());
          this.master.getAll();
          this.screen.presentToast('Bem Vindo, '+ this.userClass.get().data.first_name + '!', 'sucess');
        } else
        {
          this.screen.presentToast('Usuário não localizado.');
        }
      })
      .catch(() => {
        // Tratamento de erro
      })
      .finally(() => {
        this.screen.loadingDismiss();
        this.navigation.goTo('home');
      });
    }
  }

  /*
  Remove id da sessão do cache
    ** Catch -> Erro ao realizar a operação de remover do cache

    ** Finally -> Remove inforamações da classe usuário e envia usuário para a página de login.
    Caso id da sessão não tenha sido removida, usuário não será redirecionado para o login devido às guards.
  */
  async logout()
  {
    await this.screen.presentLoading();
    this.master.clearAllCache()
    .catch(() => {
      this.screen.presentToast('Ocorreu um erro inesperado');
    })
    .finally(() => {
      this.screen.loadingDismiss();
      this.navigation.goTo('login');
    });
  }

  /*
  Cria os parametros de requisição do login
  */
  private makeParams(body)
  {
    const params = new HttpParams().set('email', body.email).set('password', body.password);
    return params;
  }
}
