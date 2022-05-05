import { MyReserveSlideModule } from '../../../../../components/swiper/reserve-slide/reserve-slide.module';
import { MyReservationCardModule } from '../../../../../components/cards/reservation-card/reservation-card.module';
import { MyPageTitle } from 'src/app/components/page-atoms/page-title/page-title.module';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaEspacoDetailsPageRoutingModule } from './reserva-espaco-details-routing.module';

import { ReservaEspacoDetailsPage } from './reserva-espaco-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaEspacoDetailsPageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyPageTitle,
    MyReservationCardModule,
    MyReserveSlideModule
  ],
  declarations: [ReservaEspacoDetailsPage]
})
export class ReservaEspacoDetailsPageModule {}
