import { MyPageTitle } from 'src/app/components/page-atoms/page-title/page-title.module';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaHomePageRoutingModule } from './reserva-home-routing.module';

import { ReservaHomePage } from './reserva-home.page';
import { MySelectModule } from 'src/app/components/selects/dependent-select/dependent.select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaHomePageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyPageTitle,
    MySelectModule
  ],
  declarations: [ReservaHomePage]
})
export class ReservaHomePageModule {}
