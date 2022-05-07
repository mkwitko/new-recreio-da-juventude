import { CacheService } from './../cache/cache.service';
import { EzoomApiService } from './../api/ezoom-api.service';
import { PoolClass } from './../../classes/nivel-4/pools/pool-class';
import { SchoolClass } from './../../classes/nivel-4/schools/school-class';
import { GymClass } from './../../classes/nivel-4/gyms/gym-class';
import { FitnessClass } from './../../classes/nivel-4/fitnesses/fitness-class';
import { FieldsClass } from './../../classes/nivel-4/fields/fields-class';
import { WaitlistClass } from 'src/app/classes/nivel-5/waitlists/waitlist-class';
import { TicketsClass } from './../../classes/nivel-5/tickets/tickets-class';
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
    private fieldClass: FieldsClass,
    private fitnessClass: FitnessClass,
    private gymClass: GymClass,
    private kioskClass: KioskClass,
    private poolClass: PoolClass,
    private salonClass: SalonClass,
    private schoolClass: SchoolClass,

    //5
    private authClass: AuthClass,
    private servicesClass: ServicesClass,
    private ticketClass: TicketsClass,
    private waitlistClass: WaitlistClass,

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
    this.fieldClass.setClass();
    this.fitnessClass.setClass();
    this.gymClass.setClass();
    this.kioskClass.setClass();
    this.poolClass.setClass();
    this.salonClass.setClass();
    this.schoolClass.setClass();

    //5
    this.authClass.setClass();
    this.servicesClass.setClass();
    this.ticketClass.setClass();
    this.waitlistClass.setClass();

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
    await this.fieldClass.clear();
    await this.fitnessClass.clear();
    await this.gymClass.clear();
    await this.kioskClass.clear();
    await this.poolClass.clear();
    await this.salonClass.clear();
    await this.schoolClass.clear();

    //5
    await this.authClass.clearPolitica();
    await this.authClass.clearAceite();

    await this.servicesClass.clearCategoria();
    await this.servicesClass.clearContratado();

    await this.ticketClass.clearMyTickets();

    await this.waitlistClass.clearWaitlist();

    //6
    await this.bannerClass.clear();
    await this.letterClass.clear();
    // this.commonClass.clear();
    // this.faqClass.clear();
    // this.headquarterClass.clear();
    // this.paymentClass.clear();

  }
}
