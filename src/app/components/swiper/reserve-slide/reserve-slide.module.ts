import { ReserveSlideComponent } from './reserve-slide.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    ReserveSlideComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  exports: [
    ReserveSlideComponent
  ],
  providers: []
})

export class MyReserveSlideModule {}
