import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SocialHomePageRoutingModule } from './social-home-routing.module';

import { SocialHomePage } from './social-home.page';
import { MyFooterModule } from 'src/app/components/footer/footer/footer.module';
import { MyHeaderModule } from 'src/app/components/header/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialHomePageRoutingModule,
    MyHeaderModule,
    MyFooterModule,
  ],
  declarations: [SocialHomePage],
})
export class SocialHomePageModule {}
