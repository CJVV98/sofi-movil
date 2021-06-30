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
  
    consultArticles(type:String):any{
      let options=this.token.token();
      return this.http.get<any>(`${this.url}articles/type/${type}`, options);
    }

    getArticle(id:number, route:String):any{
      let options=this.token.token();
      return this.http.get<any>(`${this.url}articles/${route}${id}`, options);
    }


    consultArticlesPublic(type:String):any{
      return this.http.get<any>(`${this.url}articles/public/${type}`);
    }
  
    addFavorite(user:number, articles:number[]){
      let body = {
        "userid": user,
        "articlesids": articles
      };
      return this.http.post(`${environment.HOST}/addFavoriteArticlesToUser`, body);
    }

    verifyFavorite(user:number, article:number){
      let body = {
        "userid": user,
        "articleid": article
      };
      return this.http.post(`${environment.HOST}/existFavorite`, body);
  
    }

    removeFavorite(user:number, article:number){
      let body = {
        "userid": user,
        "articleid": article
      };
      return this.http.post(`${environment.HOST}/removeFavoriteArticlesToUser`, body);
  
    }

    addScore(user:number,article:number,qualification:number,details:String){
      let body = {
        "userid":user,
        "articleid":article,
        "qualification":qualification,
        "details":details
      };
      return this.http.post(`${environment.HOST}/addScoreToArticles`, body);
  
    }

    getScore(user:number){
      let body = {
        "userid":user
      };
      return this.http.post(`${environment.HOST}/getScoresByUser`, body);
  
    }
   
  }