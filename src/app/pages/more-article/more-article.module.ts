import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreArticlePageRoutingModule } from './more-article-routing.module';

import { MoreArticlePage } from './more-article.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreArticlePageRoutingModule
  ],
  declarations: [MoreArticlePage]
})
export class MoreArticlePageModule {}
