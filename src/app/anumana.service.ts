import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Anumana } from './anumana';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnumanaService
{
  constructor(private httpCliente: HttpClient) { }

  createAnumana(anumana: Anumana): Observable<Object> {
    return this.httpCliente.post('https://hetucakra-api.herokuapp.com', anumana);
  }

}
