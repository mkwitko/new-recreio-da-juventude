import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcademiaHomePageRoutingModule } from './academia-home-routing.module';

import { AcademiaHomePage } from './academia-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcademiaHomePageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
  ],
  declarations: [AcademiaHomePage],
})
export class AcademiaHomePageModule {}
