import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreArticlePageRoutingModule } from './more-article-routing.module';

import { MoreArticlePage } from './more-article.page';
import { BarRatingModule } from 'ngx-bar-rating';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreArticlePageRoutingModule,
    BarRatingModule
  ],
  declarations: [MoreArticlePage]
})
export class MoreArticlePageModule {}
