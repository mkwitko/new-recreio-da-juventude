import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusIngressosPage } from './meus-ingressos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusIngressosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusIngressosPageRoutingModule {}
