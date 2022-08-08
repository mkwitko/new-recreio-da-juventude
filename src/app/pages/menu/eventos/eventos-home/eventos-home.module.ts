import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventosHomePageRoutingModule } from './eventos-home-routing.module';

import { EventosHomePage } from './eventos-home.page';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventosHomePageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
  ],
  declarations: [EventosHomePage],
})
export class EventosHomePageModule {}
