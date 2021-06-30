import { error } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/_model/Article';
import { Score } from 'src/app/_model/Score';
import { ContentService } from 'src/app/_service/content.service';
import { InfoArticle } from 'src/app/_service/infoArticle.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-more-article',
  templateUrl: './more-article.page.html',
  styleUrls: ['./more-article.page.scss'],
})
export class MoreArticlePage implements OnInit {
  article!: Article;
  userId:number;
  nameIcon:String;
  detail:String;
  scores!: Array<Score>;
  view:boolean=false;
  rate = 3;
  faoRate !:number;
  faoRated = false;
  breadCrumbItems: Array<{}>;
  id: number;
  privacity: string;
  constructor(public service: ContentService, private route: ActivatedRoute, public alertController: AlertController) { }

  ngOnInit() {
    this.nameIcon="heart-outline";
    this.breadCrumbItems = [{ label: 'UI Elements' }, { label: 'Rating', active: true }];
    this.id = this.route.snapshot.params.id;
    this.privacity = this.route.snapshot.params.privacidad;
    console.log(window.localStorage.getItem("user_id"));
    this.view=(window.localStorage.getItem("user_id") != undefined && 
              window.localStorage.getItem("user_id")!=null && window.localStorage.getItem("user_id")!="")?true:false;       
    let url = this.privacity ? 'public/show/' : '';
    if(this.view){
      this.userId=parseInt(window.localStorage.getItem("user_id"));
    }
    setTimeout(() => {   
      this.service.getArticle(this.id, url).subscribe(result => {
        if (!result) {
          return;
        };       
        this.article = result.data;
        this.selectScore();
        this.verifyFavorite();
      });
    },10);
 
  }

  async logRatingChange(e:any) {
    console.log(e);
    this.faoRate=e;
    console.log('dsdsds',   this.scores);
  
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Detalles',
      inputs: [
        {
          name: 'detail',
          type: 'text',
          value:this.detail,
          placeholder: 'Ingrese su comentario'
        },
      ],
      buttons: [{  text:'Aceptar',handler: (alertData) => {
        this.loadScore(alertData.detail); //takes the data 
        console.log(alertData.detail);
      }}]
    });
    await alert.present();
  }


  loadScore(detail:String){
     this.service.addScore(this.userId,this.article.id,this.faoRate,detail).subscribe();
  }
  selectScore(){
    this.service.getScore(this.userId).subscribe((result: { data: any; })=>{
      if(!result){
        return;
      };
      this.scores=result.data.scores;
      this.scores=this.scores.filter(p => p.articleid.includes(this.id.toString()));
      console.log('dsdsds',   this.scores);
      this.faoRate=this.scores.length>0?parseInt(this.scores[0].qualification):0;
        });

  }
  
  verifyFavorite(){
    this.service.verifyFavorite(this.userId,parseInt(this.id.toString())).subscribe((result: { data: any; })=>{
      if(!result){
        return;
      };
      const state:boolean=result.data.favoritefound;
      this.nameIcon=state?"heart":"heart-outline"
    });
  }

  changeFavorite(){
    console.log(this.nameIcon=="heart");
    if( this.nameIcon=="heart"){
      this.nameIcon="heart-outline";
      this.service.removeFavorite(this.userId,this.id).subscribe();
    }else{
      this.nameIcon="heart";
      let datArt:Array<number>=new Array();
      datArt.push(this.id);
      this.service.addFavorite(this.userId,datArt).subscribe();
    }
  
  }

  filterArticle(){

  }

}
