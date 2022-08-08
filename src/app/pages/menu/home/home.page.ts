import { BannerClass } from './../../../classes/nivel-6/banners/banner';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  path = '../../../../assets/img/';

  constructor(
    public bannerClass: BannerClass,
    private navigation: NavigationService
  ) {}

  goTo(url: string) {
    this.navigation.goTo(url);
  }
}
