import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaClubePage } from './mapa-clube.page';

const routes: Routes = [
  {
    path: '',
    component: MapaClubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaClubePageRoutingModule {}
