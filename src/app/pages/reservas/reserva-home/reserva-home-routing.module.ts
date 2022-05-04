import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaHomePage } from './reserva-home.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaHomePageRoutingModule {}
