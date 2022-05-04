import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeusTreinosPage } from './meus-treinos.page';

const routes: Routes = [
  {
    path: '',
    component: MeusTreinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeusTreinosPageRoutingModule {}
