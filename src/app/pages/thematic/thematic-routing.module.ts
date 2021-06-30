import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThematicPage } from './thematic.page';

const routes: Routes = [
  {
    path: '',
    component: ThematicPage
  },
  {
    path: 'more-article/:privacidad/:id',  
    loadChildren: () => import('../more-article/more-article.module').then( m => m.MoreArticlePageModule)

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThematicPageRoutingModule {}
