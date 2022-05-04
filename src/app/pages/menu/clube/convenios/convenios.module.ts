import { MyPageTitle } from './../../../../components/page-atoms/page-title/page-title.module';
import { MyFooterModule } from './../../../../components/footer/footer/footer.module';
import { MyHeaderModule } from './../../../../components/header/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConveniosPageRoutingModule } from './convenios-routing.module';

import { ConveniosPage } from './convenios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConveniosPageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyPageTitle
  ],
  declarations: [ConveniosPage]
})
export class ConveniosPageModule {}
