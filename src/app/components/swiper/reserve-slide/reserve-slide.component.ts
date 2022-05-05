import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-reserve-slide',
  templateUrl: './reserve-slide.component.html',
  styleUrls: ['./reserve-slide.component.scss'],
})
export class ReserveSlideComponent implements OnInit {

  @Input() slides;

  constructor() { }

  ngOnInit() {}

}
