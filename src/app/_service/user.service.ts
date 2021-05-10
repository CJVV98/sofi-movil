import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InfoUser } from '../_model/InfoUser';
import { Token } from './Token';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = `${environment.HOST}/`;
  constructor(private http: HttpClient, private token:Token) { }


  consultUser(id:string):any{
    let options=this.token.token();
    return this.http.get<InfoUser>(`${this.url}users/${id}`, options);
  }

}
