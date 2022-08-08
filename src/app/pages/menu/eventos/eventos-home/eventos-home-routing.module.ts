import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventosHomePage } from './eventos-home.page';

const routes: Routes = [
  {
    path: '',
    component: EventosHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventosHomePageRoutingModule {}
