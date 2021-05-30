import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Article } from "../_model/Article";
import { Token } from "./Token";

@Injectable({
    providedIn: 'root'
  })
  export class ContentService {
    url: string =  `${environment.HOST}/`;
    constructor(private http: HttpClient, private token:Token) { }
  
    consultKeyword():any{
      let options=this.token.token();
      return this.http.get<any>(`${this.url}keywords`, options);
    }
  
    consultArticles():any{
      let options=this.token.token();
      return this.http.get<any>(`${this.url}articles`, options);
    }

    getArticle(id:number):any{
      let options=this.token.token();
      return this.http.get<any>(`${this.url}articles/${id}`, options);
    }


    consultArticlesPublic():any{
      return this.http.get<any>(`${this.url}articles/public`);
    }
  
   
  }