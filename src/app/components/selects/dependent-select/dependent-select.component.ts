import { DependentClass } from './../../../classes/dependentes/dependent-class';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependent-select',
  templateUrl: './dependent-select.component.html',
  styleUrls: ['./dependent-select.component.scss'],
})
export class DependentSelectComponent implements OnInit {

  constructor(
    public dependentClass: DependentClass
  ) { }

  ngOnInit() {}

}
