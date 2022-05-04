import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaClubePageRoutingModule } from './mapa-clube-routing.module';

import { MapaClubePage } from './mapa-clube.page';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaClubePageRoutingModule,
    MyHeaderModule,
    MyFooterModule
  ],
  declarations: [MapaClubePage]
})
export class MapaClubePageModule {}
