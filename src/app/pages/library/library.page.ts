import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/_model/Article';
import { ContentService } from 'src/app/_service/content.service';
import { InfoArticle } from 'src/app/_service/infoArticle.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  articles!: Array<Article>;
  constructor(public service:ContentService, public servArt:InfoArticle, private router:Router) { }

  ngOnInit() {
    this.consultArticle();
  }

  consultArticle(){
    this.service.consultArticles().subscribe((result: { data: Article[]; })=>{
      if(!result){
        return;
      };
      this.articles=result.data;
    })
  }
  moreArticle(article:Article){
     this.servArt.setArticle(article);
     this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
     this.router.navigate([`/more-article/`],))
  }
}
