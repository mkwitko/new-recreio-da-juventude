import { MySelectModule } from './../../../../components/selects/dependent-select/dependent.select.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasReservasPageRoutingModule } from './minhas-reservas-routing.module';

import { MinhasReservasPage } from './minhas-reservas.page';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';
import { MyPageTitle } from 'src/app/components/page-atoms/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasReservasPageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyPageTitle,
    MySelectModule
  ],
  declarations: [MinhasReservasPage]
})
export class MinhasReservasPageModule {}
