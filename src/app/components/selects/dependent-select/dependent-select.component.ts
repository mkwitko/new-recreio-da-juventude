import { ReservaEspacoManagerClass } from 'src/app/classes/nivel-3/ManagerEspacoLocalizacao/reserva-espaco-manager-class';
/* eslint-disable guard-for-in */
import { ReserveGeneralClass } from '../../../classes/nivel-3/general/reserve-general-class';
import { DependentClass } from '../../../classes/nivel-2/dependentes/dependent-class';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dependent-select',
  templateUrl: './dependent-select.component.html',
  styleUrls: ['./dependent-select.component.scss'],
})
export class DependentSelectComponent{

  constructor(
    public dependentClass: DependentClass,
    private reservaEspacoManager: ReservaEspacoManagerClass
  ) { }

  select(event)
  {
    this.dependentClass.clearReserveData();
    for(const a of this.dependentClass.get().data)
    {
      if(a.name.toLowerCase() === event.detail.value.toLowerCase())
      {
        this.dependentClass.setReserveData(a.sequency);
        break;
      }
    }
    if(!this.dependentClass.getReserveData())
    {
      this.dependentClass.setReserveData('00');
    }
    this.reservaEspacoManager.getResponseLocationDependent();
  }

}
