import { MyPageTitle } from './../../../../components/page-atoms/page-title/page-title.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeusIngressosPageRoutingModule } from './meus-ingressos-routing.module';

import { MeusIngressosPage } from './meus-ingressos.page';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeusIngressosPageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyPageTitle
  ],
  declarations: [MeusIngressosPage]
})
export class MeusIngressosPageModule {}
