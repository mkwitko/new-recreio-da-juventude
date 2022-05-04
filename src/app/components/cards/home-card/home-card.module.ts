import { HomeCardComponent } from './home-card.component';
import { MySvgModule } from './../../svg/ezoom-svg/ezoom-svg.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MySvgModule
  ],
  exports: [
    HomeCardComponent
  ],
  providers: []
})

export class MyHomeCardModule {}
