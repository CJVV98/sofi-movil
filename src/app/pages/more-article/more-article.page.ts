import { error } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/_model/Article';
import { ContentService } from 'src/app/_service/content.service';
import { InfoArticle } from 'src/app/_service/infoArticle.service';

@Component({
  selector: 'app-more-article',
  templateUrl: './more-article.page.html',
  styleUrls: ['./more-article.page.scss'],
})
export class MoreArticlePage implements OnInit {
  article!: Article;
  rate = 3;
  horiRate = 7;
  vertRate = 1;
  squareRate = 3;
  movieRate = 2;
  customRate = 2;
  starRate = 4;
  bootRate = 1;
  faRate = 1;
  cssRate = 1;
  faoRate = 5.6;
  faoRated = false;
  breadCrumbItems: Array<{}>;
  id: number;
  privacity: string;
  constructor(public service: ContentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Rating', active: true }];
    this.id = this.route.snapshot.params.id;
    this.privacity = this.route.snapshot.params.privacidad;
    console.log(this.id);
    console.log(this.privacity);
    let url = this.privacity ? 'public/show/' : '';
    setInterval(() => {
      this.service.getArticle(this.id, url).subscribe(result => {
        if (!result) {
          return;
        };
        this.article = result.data;
        console.log(this.article.title);
      });
    },2000);
  }

  logRatingChange(rating) {
    console.log("changed rating: ", rating);
    // do your stuff
  }


  onFaoRate(e) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }

}
