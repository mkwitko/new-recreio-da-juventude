import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcademiaHomePage } from './academia-home.page';

const routes: Routes = [
  {
    path: '',
    component: AcademiaHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcademiaHomePageRoutingModule {}
