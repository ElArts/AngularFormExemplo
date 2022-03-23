import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noticias } from '../models/noticias';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/login"

  constructor(private httpClient: HttpClient) { }

  getNoticias(): Observable<Noticias[]>{
  return this.httpClient.get<Noticias[]>(this.url)
}
}