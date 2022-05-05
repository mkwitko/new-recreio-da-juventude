import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaAtividadePageRoutingModule } from './reserva-atividade-routing.module';

import { ReservaAtividadePage } from './reserva-atividade.page';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';
import { MySvgModule } from 'src/app/components/svg/ezoom-svg/ezoom-svg.module';
import { MyPageTitle } from 'src/app/components/page-atoms/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaAtividadePageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyPageTitle,
    MySvgModule
  ],
  declarations: [ReservaAtividadePage]
})
export class ReservaAtividadePageModule {}
