import { MySvgModule } from './../../svg/ezoom-svg/ezoom-svg.module';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MySvgModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: []
})

export class MyHeaderModule {}
