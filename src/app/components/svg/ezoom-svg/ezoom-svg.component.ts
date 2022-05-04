import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ezoom-svg',
  templateUrl: './ezoom-svg.component.html',
  styleUrls: ['./ezoom-svg.component.scss'],
})
export class EzoomSvgComponent {

  @Input() file;

  @Input() customClass = '';
}
