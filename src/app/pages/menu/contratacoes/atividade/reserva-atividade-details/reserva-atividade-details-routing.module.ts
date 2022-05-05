import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaAtividadeDetailsPage } from './reserva-atividade-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaAtividadeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaAtividadeDetailsPageRoutingModule {}
