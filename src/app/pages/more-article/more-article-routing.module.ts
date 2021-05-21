import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreArticlePage } from './more-article.page';

const routes: Routes = [
  {
    path: '',
    component: MoreArticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreArticlePageRoutingModule {}
