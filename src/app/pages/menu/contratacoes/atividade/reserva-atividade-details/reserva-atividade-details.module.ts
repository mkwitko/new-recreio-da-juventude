import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaAtividadeDetailsPageRoutingModule } from './reserva-atividade-details-routing.module';

import { ReservaAtividadeDetailsPage } from './reserva-atividade-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaAtividadeDetailsPageRoutingModule
  ],
  declarations: [ReservaAtividadeDetailsPage]
})
export class ReservaAtividadeDetailsPageModule {}
