import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/_model/Article';
import { ContentService } from 'src/app/_service/content.service';
import { InfoArticle } from 'src/app/_service/infoArticle.service';

@Component({
  selector: 'app-thematic',
  templateUrl: './thematic.page.html',
  styleUrls: ['./thematic.page.scss'],
})
export class ThematicPage implements OnInit {
  articles!: Array<Article>;
  constructor(public service: ContentService, public servArt: InfoArticle, private router: Router) { }
  public: boolean = false;
  ngOnInit() {
    this.consultArticle();
  }

  consultArticle() {
    this.service.consultArticles('tematica').subscribe((result: { data: Article[]; }) => {
      if (!result) {
        return;
      };
      this.articles = result.data;
    }, error => {
      this.service.consultArticlesPublic('tematica').subscribe((result: { data: Article[]; }) => {
        if (!result) {
          return;
        };
        this.public = true;
        this.articles = result.data;
      })
    });
  }
  moreArticle(article: number) {
    let tipo = this.public ? 'publico' : 'privado';
    console.log(article);
    this.router.navigateByUrl('/more-article', { skipLocationChange: true }).then(() =>
      this.router.navigate([`/more-article/${tipo}/${article}`],))

  }
}

