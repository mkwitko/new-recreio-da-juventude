import { DependentSelectComponent } from './dependent-select.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    DependentSelectComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  exports: [
    DependentSelectComponent
  ],
  providers: []
})

export class MySelectModule {}
