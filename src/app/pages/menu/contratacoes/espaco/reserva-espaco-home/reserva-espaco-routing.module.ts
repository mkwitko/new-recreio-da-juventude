import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaEspacoPage } from './reserva-espaco.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaEspacoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaEspacoPageRoutingModule {}
