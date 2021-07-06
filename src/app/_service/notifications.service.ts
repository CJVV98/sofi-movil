import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InfoUser } from '../_model/InfoUser';
import { User } from '../_model/User';
import { Token } from './Token';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  url: string = `${environment.HOST}/`;
  constructor(private http: HttpClient, private token:Token) { }


  consult():any{
    let options=this.token.token();
    return this.http.get<any>(`${this.url}notifications`, options);
  }

}
