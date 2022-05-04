import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicosContratadosPage } from './servicos-contratados.page';

const routes: Routes = [
  {
    path: '',
    component: ServicosContratadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicosContratadosPageRoutingModule {}
