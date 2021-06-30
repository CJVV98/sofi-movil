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
  login(user: User): any {
    return this.http.post(`${environment.HOST}/login`, user);
  }

  forgotPassword(email: string): any {
    let body = {
      "usermail": email
    };
    return this.http.post(`${environment.HOST}/sendForgotPasswordMail`, body);
  }
  verifyCode(code: number, idUser: number): any {
    let body = {
      "confirmationcode": code,
      "userid": idUser
    };
    return this.http.post(`${environment.HOST}/confirmCodeRestorePassword`, body);

  }
  changePassword(idUser: number, password: string):any{
    console.log(password);
    let body = {
      "userid": idUser,
      "usernewpassword": password,
      "userconfirmpassword": password,
    };
    return this.http.post(`${environment.HOST}/saveNewPassword`, body);

  }
}
