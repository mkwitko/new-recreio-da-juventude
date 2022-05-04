import { HomeSlideComponent } from './home-slide.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    HomeSlideComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  exports: [
    HomeSlideComponent
  ],
  providers: []
})

export class MyHomeSlideModule {}
