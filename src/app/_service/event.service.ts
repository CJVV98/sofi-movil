import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EventService {
  url: string =  `${environment.HOST}api/`;
  constructor(private http: HttpClient) { }

  consult():any{
    let options=this.token();
    console.log(window.sessionStorage.getItem("token"));
    return this.http.get<any>(`${this.url}events`, options);
  }

   token():any{
    const headers = new Headers();
    /** In Angular 5, including the header Content-Type can invalidate your request */
    let optiosHeader = new HttpHeaders({
        'Authorization': 'Bearer '+window.sessionStorage.getItem("token"),
      

     });
     let options = {
        headers: optiosHeader
     }
     return options;
  }

}