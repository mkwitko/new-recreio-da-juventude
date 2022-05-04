import { DependentClass } from './../../classes/dependentes/dependent-class';
import { UserClass } from 'src/app/classes/user/user-class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterReqService {

  constructor(
    private userClass: UserClass,
    private dependentClass: DependentClass
  ) { }

  getAll()
  {
    this.userClass.setClass();
    this.dependentClass.setClass();
  }

  async clearAllCache()
  {
    await this.userClass.clear();
    await this.dependentClass.clear();
  }
}
