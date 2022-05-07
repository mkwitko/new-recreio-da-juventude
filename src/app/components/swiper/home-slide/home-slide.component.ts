import { NavigationService } from './../../../services/navigation/navigation.service';
import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.scss'],
})
export class HomeSlideComponent implements OnInit {

  @Input() slides;

  constructor(
    private navigation: NavigationService
  ) { }

  ngOnInit() {}

  goTo(url: string)
  {
    this.navigation.away(url);
  }

}
