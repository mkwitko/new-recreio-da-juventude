import { ServicesClass } from './../../classes/nivel-5/services/services-class';
import { PaymentClass } from './../../classes/nivel-6/payments/payment-info-class';
import { HeadquarterClass } from './../../classes/nivel-6/headquarters/headquarter-class';
import { FaqClass } from './../../classes/nivel-6/faqs/faq-class';
import { CommonClass } from './../../classes/nivel-6/common/common-class';
import { LetterClass } from './../../classes/nivel-6/cartas/cartas-class';
import { ReservaEspacoManagerClass } from '../../classes/nivel-3/ManagerEspacoLocalizacao/reserva-espaco-manager-class';
import { DependentClass } from '../../classes/nivel-2/dependentes/dependent-class';
import { UserClass } from 'src/app/classes/nivel-1/user/user-class';
import { Injectable } from '@angular/core';
import { BannerClass } from 'src/app/classes/nivel-6/banners/banner';
import { AuthClass } from 'src/app/classes/nivel-5/authorizations/authorization-class';
import { SalonClass } from 'src/app/classes/nivel-4/salons/salon-class';
import { KioskClass } from 'src/app/classes/nivel-4/kiosks/kiosk-class';

@Injectable({
  providedIn: 'root'
})
export class MasterReqService {

  constructor(
    //1
    private userClass: UserClass,

    //Suporte

    //2
    private dependentClass: DependentClass,

    //3
    private reservaEspacoManager: ReservaEspacoManagerClass,

    //4
    private salonClass: SalonClass,
    private kioskClass: KioskClass,

    //5
    private authClass: AuthClass,
    private servicesClass: ServicesClass,

    //6
    private bannerClass: BannerClass,
    private letterClass: LetterClass,
    private commonClass: CommonClass,
    private faqClass: FaqClass,
    private headquarterClass: HeadquarterClass,
    private paymentClass: PaymentClass
  ) { }

  getAll()
  {
    //1
    this.userClass.setClass();

    //Suporte

    //2
    this.dependentClass.setClass();

    //3
    this.reservaEspacoManager.getCache()
    .then(res => {
      if(res)
      {
        this.reservaEspacoManager.set(res);
      }
    });

    //4
    this.salonClass.setClass();
    this.kioskClass.setClass();

    //5
    this.authClass.setClass();
    this.servicesClass.setClass();

    //6
    this.bannerClass.setClass();
    this.letterClass.setClass();
    this.commonClass.setClass();
    this.faqClass.setClass();
    this.headquarterClass.setClass();
    this.paymentClass.setClass();
  }

  async clearAllCache()
  {
    //1
    await this.userClass.clear();

    //Suporte

    //2
    await this.dependentClass.clear();

    //3
    await this.reservaEspacoManager.clear();

    //4
    await this.salonClass.clear();
    await this.kioskClass.clear();

    //5
    await this.authClass.clearPolitica();
    await this.authClass.clearAceite();

    await this.servicesClass.clearCategoria();
    await this.servicesClass.clearContratado();

    //6
    await this.bannerClass.clear();
    await this.letterClass.clear();
    // this.commonClass.clear();
    // this.faqClass.clear();
    // this.headquarterClass.clear();
    // this.paymentClass.clear();

  }
}
