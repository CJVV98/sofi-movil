import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  login() {
    let user = new User();
    user.password="www";
    user.username="user1";
    return this.http.post( `${environment.HOST}login`, user);
  }

}
