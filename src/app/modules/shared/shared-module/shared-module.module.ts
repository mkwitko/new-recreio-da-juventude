import { AuthClass } from './../../../classes/nivel-5/authorizations/authorization-class';
import { PaymentClass } from './../../../classes/nivel-6/payments/payment-info-class';
import { HeadquarterClass } from './../../../classes/nivel-6/headquarters/headquarter-class';
import { FaqClass } from './../../../classes/nivel-6/faqs/faq-class';
import { CommonClass } from './../../../classes/nivel-6/common/common-class';
import { LetterClass } from './../../../classes/nivel-6/cartas/cartas-class';
import { ReserveGeneralClass } from '../../../classes/nivel-3/general/reserve-general-class';
import { LocationManagerClass } from '../../../classes/nivel-3/locations/location-manager-class';
import { DependentClass } from '../../../classes/nivel-2/dependentes/dependent-class';
import { BannerClass } from '../../../classes/nivel-6/banners/banner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClass } from 'src/app/classes/nivel-1/user/user-class';
import { ReservaEspacoManagerClass } from 'src/app/classes/nivel-3/ManagerEspacoLocalizacao/reserva-espaco-manager-class';
import { KioskClass } from 'src/app/classes/nivel-4/kiosks/kiosk-class';
import { SalonClass } from 'src/app/classes/nivel-4/salons/salon-class';
import { ServicesClass } from 'src/app/classes/nivel-5/services/services-class';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    //Nivel 1
    UserClass,

    // Suporte ao Usuario

    //Nivel 2
    DependentClass,

    //Nivel 3
    ReservaEspacoManagerClass,
    ReserveGeneralClass,
    LocationManagerClass,

    //Nivel 4
    KioskClass,
    SalonClass,

    //Nivel 5
    AuthClass,
    ServicesClass,

    //Nivel 6

    //Banners
    BannerClass,
    LetterClass,
    CommonClass,
    FaqClass,
    HeadquarterClass,
    PaymentClass
  ]
})
export class SharedModuleModule { }
