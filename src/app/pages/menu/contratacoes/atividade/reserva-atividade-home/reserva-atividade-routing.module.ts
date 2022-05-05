import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaAtividadePage } from './reserva-atividade.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaAtividadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaAtividadePageRoutingModule {}
