import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraIngressoPage } from './compra-ingresso.page';

const routes: Routes = [
  {
    path: '',
    component: CompraIngressoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraIngressoPageRoutingModule {}
