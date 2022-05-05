import { AuthService } from 'src/app/services/auth/auth.service';
import { UserClass } from 'src/app/classes/nivel-1/user/user-class';
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { environment } from './../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EzoomApiService {

  constructor(
    private http: HttpClient,
    private userClass: UserClass
  ) { }

    /*
    Metódo de conexão Get
    Retorna resultado da requisição feita à url base, vinda de src/environments
    */
    async get(method: string, params?: HttpParams): Promise<any>
    {
      const headers = await this.getHeaders();
      return new Promise((resolve,reject) => {
        this.http.get(environment.api.baseUrl + method, {headers, params}).subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        });
      });
    }

    async post(method: string, params): Promise<any>
    {
      const headers = await this.getHeaders();
      return new Promise((resolve, reject) => {
        this.http.post(environment.api.baseUrl + method, params, {headers}).subscribe({
          next: (res) => {
            resolve(res);
          },
          error: (err) => {
            reject(err);
          }
        });
      });
    }

    /*
    Criação de cabeçalhos
    */
    private async getHeaders()
    {
      let sessionId = '';
      await this.userClass.getAuth().then(res => {
        if(res.status)
        {
          sessionId = res.data.session_id;
        }
      });
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'api-token': environment.api.token,
        'api-version': environment.api.version,
        'Accept': 'application/json',
        'session-id': sessionId
      };
      return headers;
    }
}
