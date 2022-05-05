import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraIngressoDetailsPageRoutingModule } from './compra-ingresso-details-routing.module';

import { CompraIngressoDetailsPage } from './compra-ingresso-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraIngressoDetailsPageRoutingModule
  ],
  declarations: [CompraIngressoDetailsPage]
})
export class CompraIngressoDetailsPageModule {}
