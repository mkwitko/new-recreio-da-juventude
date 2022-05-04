import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicosContratadosPageRoutingModule } from './servicos-contratados-routing.module';

import { ServicosContratadosPage } from './servicos-contratados.page';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';
import { MyPageTitle } from 'src/app/components/page-atoms/page-title/page-title.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicosContratadosPageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
    MyPageTitle
  ],
  declarations: [ServicosContratadosPage]
})
export class ServicosContratadosPageModule {}
