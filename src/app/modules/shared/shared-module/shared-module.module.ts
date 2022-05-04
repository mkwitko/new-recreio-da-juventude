import { DependentClass } from './../../../classes/dependentes/dependent-class';
import { BannerClass } from './../../../classes/banners/banner';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserClass } from 'src/app/classes/user/user-class';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserClass,
    BannerClass,
    DependentClass
  ]
})
export class SharedModuleModule { }
