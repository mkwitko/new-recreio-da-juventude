import { MySvgModule } from './../../svg/ezoom-svg/ezoom-svg.module';
import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MySvgModule
  ],
  exports: [
    FooterComponent
  ],
  providers: []
})

export class MyFooterModule {}
