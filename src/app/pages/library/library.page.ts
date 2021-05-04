import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_model/Article';
import { ContentService } from 'src/app/_service/content.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  articles!: Array<Article>;
  constructor(public service:ContentService) { }

  ngOnInit() {
    this.consultEvents();
  }

  consultEvents(){
    this.service.consultArticles().subscribe((result: { data: Article[]; })=>{
      if(!result){
        return;
      };
      this.articles=result.data;
    })
  }
}
