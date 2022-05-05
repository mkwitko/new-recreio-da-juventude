import { ReservationCardComponent } from './reservation-card.component';
import { MySvgModule } from './../../svg/ezoom-svg/ezoom-svg.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ReservationCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MySvgModule
  ],
  exports: [
    ReservationCardComponent
  ],
  providers: []
})

export class MyReservationCardModule {}
