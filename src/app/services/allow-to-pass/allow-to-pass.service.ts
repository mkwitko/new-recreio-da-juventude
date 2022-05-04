import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllowToPassService {

  constructor() { }

  /*
  Recebe diversas varíaveis e as compara
  Caso o parametro condition exista, este será o balizador
  Caso não exista, a comparação é de true ou false
  Somente retorna true se todos objetos passarem dos ifs
  Caso um objeto seja false, retorna false para todos.
  */
  guardian(objects: any[], condition?: any)
  {
    for(const a of objects){
      if(condition)
      {
        if(a !== condition){
          return false;
        }
      }
      else
      {
        if(!a){
          return false;
        }
      }
  }
  return true;
  }
}
