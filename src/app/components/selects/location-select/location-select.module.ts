import { LocationSelectComponent } from './location-select.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    LocationSelectComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  exports: [
    LocationSelectComponent
  ],
  providers: []
})

export class MySelectLocationModule {}
