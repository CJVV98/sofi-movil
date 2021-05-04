import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class ContentService {
    url: string =  `${environment.HOST}api/`;
    constructor(private http: HttpClient) { }
  
    consultKeyword():any{
      let options=this.token();
      return this.http.get<any>(`${this.url}keywords`, options);
    }
  
    consultArticles():any{
      let options=this.token();
      return this.http.get<any>(`${this.url}articles`, options);
    }
  
    token():any{
      const headers = new Headers();
      /** In Angular 5, including the header Content-Type can invalidate your request */
      let optiosHeader = new HttpHeaders({
          'Authorization': 'Bearer '+window.sessionStorage.getItem("token")
       });
       let options = {
          headers: optiosHeader
       }
       return options;
    }
  
  }