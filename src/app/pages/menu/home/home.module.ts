import { MyHomeCardModule } from './../../../components/cards/home-card/home-card.module';
import { MyHeaderModule } from './../../../components/header/header/header.module';
import { MyFooterModule } from './../../../components/footer/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MyHomeSlideModule } from 'src/app/components/swiper/home-slide/home-slide.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyHomeCardModule,
    MyHomeSlideModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
