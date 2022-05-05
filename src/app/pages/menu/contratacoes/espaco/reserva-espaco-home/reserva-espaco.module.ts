import { MySelectLocationModule } from '../../../../../components/selects/location-select/location-select.module';
import { MySelectModule } from '../../../../../components/selects/dependent-select/dependent.select.module';
import { MyPageTitle } from '../../../../../components/page-atoms/page-title/page-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaEspacoPageRoutingModule } from './reserva-espaco-routing.module';

import { ReservaEspacoPage } from './reserva-espaco.page';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaEspacoPageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyPageTitle,
    MySelectModule,
    MySelectLocationModule
  ],
  declarations: [ReservaEspacoPage]
})
export class ReservaEspacoPageModule {}
