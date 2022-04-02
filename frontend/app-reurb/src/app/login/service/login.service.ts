import { Login } from 'src/app/login/login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService
{
  constructor(private httpClient: HttpClient) { }

  private readonly urlApi = "api/login";

  //get(): Observable<Login>
  get(): Observable<Login>
  {
    return this.httpClient.get<Login>(this.urlApi);
    //return {id: 123, nome: 'Alexandre Albuquerque Florêncio Filho',
      //idade: 27, endereco: 'QSD 8 Casa 9 - Taguatinga Sul - DF'};
  }
}
