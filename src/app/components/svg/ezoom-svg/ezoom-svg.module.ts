import { EzoomSvgComponent } from './ezoom-svg.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EzoomSvgComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    EzoomSvgComponent
  ],
  providers: []
})

export class MySvgModule {}
