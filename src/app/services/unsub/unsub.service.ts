import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UnsubService {

  constructor() { }

  /*
  Ao se inscrever em alguma chamada,
  é boa prática chamar um unsubscribe após a chegada das informações de requisição
  */
  unsub(sub: any[]){
    setTimeout(() => {
      for(const a of sub){
        a.unsubscribe();
      }
      console.log('unsubscribed!');
      }, 2500);
  }
}
