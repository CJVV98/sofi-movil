import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/_model/Article';
import { Favorite } from 'src/app/_model/Favorite';
import { ContentService } from 'src/app/_service/content.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites:Array<Favorite>;
  favoritesGen:Array<Favorite>;
  constructor(private service:ContentService) { }

  ngOnInit() {
    this.consultFavorites();
  }

  consultFavorites() {
    let userId=window.localStorage.getItem("user_id");
    this.service.getFavorites(Number.parseInt(userId)).subscribe((result: { data: any; })=>{
      if(!result){
        return;
      };
      this.favoritesGen=this.favorites=result.data.articlesfavorites;
    });
  }

  search(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    setTimeout(() => {
      this.favorites = this.favoritesGen.filter(p => p.titlearticle.toLowerCase().includes(filterValue.toLowerCase()));
    }, 100)
  }
}
