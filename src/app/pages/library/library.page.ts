import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/_model/Article';
import { ContentService } from 'src/app/_service/content.service';
import { InfoArticle } from 'src/app/_service/infoArticle.service';
import { MoreArticlePage } from '../more-article/more-article.page';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  articles!: Array<Article>;
  articlesGen!: Array<Article>;
  constructor(public service: ContentService, public servArt: InfoArticle, private router: Router) { }
  public: boolean = false;
  ngOnInit() {
    this.consultArticle();
  }

  search(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    setTimeout(() => {
      this.articles = this.articlesGen.filter(p => p.title.includes(filterValue) ||(p.author!= undefined && p.author.includes(filterValue))
      || p.extract.includes(filterValue) || p.keywords.toString().includes(filterValue));
    }, 100)
  }

  consultArticle() {
    this.service.consultArticles('biblioteca').subscribe((result: { data: Article[]; }) => {
      if (!result) {
        return;
      };
      this.articles = result.data;
      this.articlesGen=this.articles;
    }, error => {
      this.service.consultArticlesPublic('biblioteca').subscribe((result: { data: Article[]; }) => {
        if (!result) {
          return;
        };
        this.public = true;
        this.articles = result.data;
        this.articlesGen=this.articles;
      })
    });
  }
  moreArticle(article: number) {
    let tipo = this.public ? 'publico' : 'privado';
    console.log(article);
    this.router.navigateByUrl('/more-article/'+tipo+'/'+article, { skipLocationChange: true }).then(() =>
      this.router.navigate([`/more-article/${tipo}/${article}`],))

  }
}
