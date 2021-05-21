import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_model/Article';
import { InfoArticle } from 'src/app/_service/infoArticle.service';

@Component({
  selector: 'app-more-article',
  templateUrl: './more-article.page.html',
  styleUrls: ['./more-article.page.scss'],
})
export class MoreArticlePage implements OnInit {
  article!:Article;
  constructor(public infoArt:InfoArticle) { }

  ngOnInit() {
    this.article=this.infoArt.getArticle();
  }

}
