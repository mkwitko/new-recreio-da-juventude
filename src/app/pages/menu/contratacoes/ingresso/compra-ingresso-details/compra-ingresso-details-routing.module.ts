import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraIngressoDetailsPage } from './compra-ingresso-details.page';

const routes: Routes = [
  {
    path: '',
    component: CompraIngressoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraIngressoDetailsPageRoutingModule {}
