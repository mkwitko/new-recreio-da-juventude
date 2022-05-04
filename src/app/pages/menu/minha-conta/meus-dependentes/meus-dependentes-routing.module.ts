import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusDependentesPage } from './meus-dependentes.page';

const routes: Routes = [
  {
    path: '',
    component: MeusDependentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusDependentesPageRoutingModule {}
