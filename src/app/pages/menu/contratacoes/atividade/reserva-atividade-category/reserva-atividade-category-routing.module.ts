import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaAtividadeCategoryPage } from './reserva-atividade-category.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaAtividadeCategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaHomePageRoutingModule {}
