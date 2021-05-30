import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_model/Article';
import { ContentService } from 'src/app/_service/content.service';
import { InfoArticle } from 'src/app/_service/infoArticle.service';

@Component({
  selector: 'app-more-article',
  templateUrl: './more-article.page.html',
  styleUrls: ['./more-article.page.scss'],
})
export class MoreArticlePage implements OnInit {
  article!:Article;
  constructor(public infoArt:InfoArticle, public service:ContentService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.article=this.infoArt.getArticle();
      console.log(this.article.title);
      this.service.getArticle(this.article.id).subscribe(result=>{
        if(!result){
          return;
        };
        this.article=result.data;
      });
    },1000);

  }
  ngAfterViewInit(){
    this.article=this.infoArt.getArticle();
    console.log(this.article.title);
  }
}
