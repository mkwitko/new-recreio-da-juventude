import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { PageTitleComponent } from './page-title.component';

@NgModule({
  declarations: [
    PageTitleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule
  ],
  exports: [
    PageTitleComponent
  ],
  providers: []
})

export class MyPageTitle {}
