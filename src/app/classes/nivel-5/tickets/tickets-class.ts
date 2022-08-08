import { UserClass } from 'src/app/classes/nivel-1/user/user-class';
/* eslint-disable @typescript-eslint/naming-convention */
import { environment } from 'src/environments/environment.prod';
import { Injectable } from '@angular/core';
import { EzoomApiService } from 'src/app/services/api/ezoom-api.service';
import { CacheService } from 'src/app/services/cache/cache.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class TicketsClass {
  private tickets;
  private allTickets;
  private myTickets;
  private eventDetails;
  private related;
  private token;

  private controllerGetTicket = environment.api.controllers.tickets.get;
  private controllerMyTickets =
    environment.api.controllers.tickets.getMyTickets;
  private controllerAllTickets = environment.api.controllers.tickets.getAll;

  // slug
  private controllerEventDetails =
    environment.api.controllers.tickets.getEventDetails;

  // id
  private controllerGetRelated = environment.api.controllers.tickets.getRelated;

  // session_id, price, members, visitors, event
  // Se usuario estiver logado -> data['user]-> id,sequency
  // Se não data['user]-> formulario -> cpf, nome, sobrenome, e-mail, cep, endereco, numero, bairro, estado, cidade
  private controllerCreateToken =
    environment.api.controllers.tickets.createToken;

  // Token
  private controllerFinishOrder =
    environment.api.controllers.tickets.finishOrder;

  private cacheGetTickets = environment.cache.nivel5.tickets.getTickets;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public cacheGetAllTickets = environment.cache.nivel5.tickets.getAllTickets;
  private cacheGetMyTickets = environment.cache.nivel5.tickets.getMyTickets;

  constructor(
    private cache: CacheService,
    private api: EzoomApiService,
    private user: UserClass
  ) {}

  //Começo Funções My Tickets
  getMyTicketsHttp(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api
        .get(this.controllerMyTickets)
        .then((res) => {
          if (res.status) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getMyTicketsInfo() {
    return this.myTickets;
  }

  getMyTicketsCache(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .getCache(this.cacheGetMyTickets)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  setMyTickets(req) {
    this.myTickets = req;
  }

  setMyTicketsCache() {
    this.cache.getCache(this.cacheGetMyTickets).then(() => {
      this.cache.setCache(this.cacheGetMyTickets, this.getMyTicketsInfo());
    });
  }

  clearMyTickets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .removeCache(this.cacheGetMyTickets)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /*
  Requisição

  Já existe em cache?
    -> Sim
      -> É igual à requisição?
        -> Sim -> Seta variavel
        -> Não -> Seta variavel + Cache

    -> Não -> Seta variavel + Cache
  */

  setClassMyTickets() {
    // Retorna informação do cache
    this.getMyTicketsCache().then((cacheInfo) => {
      this.getMyTicketsHttp().then((res) => {
        //Preenche variavel
        this.setMyTickets(res);

        //Se já existir em cache
        if (cacheInfo) {
          // E a requisição http for diferente
          if (cacheInfo !== res) {
            // Atualiza cache
            this.setMyTicketsCache();
          }
        } else {
          // Se não existir cache, preenche
          this.setMyTicketsCache();
        }
      });
    });
  }
  // Fim

  //Começo Funções My Tickets
  getAllTicketsHttp(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api
        .get(this.controllerAllTickets)
        .then((res) => {
          if (res.status) {
            resolve(res.data);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getAllTicketsInfo() {
    return this.allTickets;
  }

  getAllTicketsCache(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .getCache(this.cacheGetAllTickets)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  setAllTickets(req) {
    this.allTickets = req;
  }

  setAllTicketsCache() {
    this.cache.getCache(this.cacheGetAllTickets).then(() => {
      this.cache.setCache(this.cacheGetAllTickets, this.getAllTicketsInfo());
    });
  }

  clearAllTickets(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.cache
        .removeCache(this.cacheGetAllTickets)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /*
  Requisição

  Já existe em cache?
    -> Sim
      -> É igual à requisição?
        -> Sim -> Seta variavel
        -> Não -> Seta variavel + Cache

    -> Não -> Seta variavel + Cache
  */

  setClassAllTickets() {
    // Retorna informação do cache
    this.getAllTicketsCache().then((cacheInfo) => {
      this.getAllTicketsHttp().then((res) => {
        //Preenche variavel
        this.setAllTickets(res);

        //Se já existir em cache
        if (cacheInfo) {
          // E a requisição http for diferente
          if (cacheInfo !== res) {
            // Atualiza cache
            this.setAllTicketsCache();
          }
        } else {
          // Se não existir cache, preenche
          this.setAllTicketsCache();
        }
      });
    });
  }
  // Fim

  setClass() {
    this.setClassAllTickets();
    this.setClassMyTickets();
  }

  getEventDetails(slug: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api
        .get(
          environment.api.controllers.tickets.getEventDetails,
          new HttpParams().set('slug', slug)
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  getRelated(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api
        .get(
          environment.api.controllers.tickets.getRelated,
          new HttpParams().set('id', id)
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  createToken(eventData, myUser = null, visitor?): Promise<any> {
    const params = new HttpParams()
      .set('session_id', myUser.session_id)
      .set('price', eventData.price)
      .set('members', eventData.quantity_member)
      .set('visitors', eventData.quantity_visitor)
      .set('event', eventData.id_ju_transaction)
      .set(
        'user',
        myUser ? { id: myUser.id, sequency: myUser.sequency } : visitor
      );

    return new Promise((resolve, reject) => {
      this.api
        .post(this.controllerCreateToken, params)
        .then((res) => {
          if (res.status) {
            resolve(res);
          } else {
            console.log('erro - ', res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  finishOrder(token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api
        .post(
          environment.api.controllers.tickets.finishOrder,
          new HttpParams().set('token', token)
        )
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
