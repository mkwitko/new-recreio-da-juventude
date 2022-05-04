import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    private router: Router,
    private inApp: InAppBrowser
  ) { }

  /*
    Sistema de navegação básico
    Caso clear === true, limpa o histórico de navegação
    Caso o histórico de navegação não seja limpo,
    o usuário poderá navegar de volta para a página de onde veio
  */
  goTo(url: string, clear=true)
  {
    if(clear)
    {
      this.router.navigateByUrl(url, { replaceUrl: true });
    }
    else
    {
      this.router.navigateByUrl(url);
    }
  }

  /*
   Sistema de navegação para links fora do app
  */
  away(url: string)
  {
    this.inApp.create(url);
  }

  /*
  Sistema de navegação passando parametros
  Estes parametros são recolhidos ná pagina destino da seguinte forma

  Importar:
  import { ActivatedRoute } from '@angular/router';

  Constructor:
  private route: ActivatedRoute

  this.route.queryParams.subscribe(params => {
      if(params)
      {
        Tratar params
      } else {
        Params não existem
      }
    });
  */
  goToParam(url: string, param: string){
    const navExtra: NavigationExtras = {
      queryParams: {
        param
      }
    };
    this.router.navigate(['/' + url], navExtra);
  }
}
