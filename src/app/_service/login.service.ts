import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from 'selenium-webdriver';
import { environment } from 'src/environments/environment';
import { User } from '../_model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  login(user: User):any {
    return this.http.post( `${environment.HOST}/login`, user);
  }

}
