import { Injectable } from "@angular/core";
import { Article } from "../_model/Article";

@Injectable({
    providedIn: 'root'
  })
export class InfoArticle {
    private article!: Article;

    setArticle(article:Article) {
        this.article = article;
    }

    getArticle() {
        return this.article;
    }
}
