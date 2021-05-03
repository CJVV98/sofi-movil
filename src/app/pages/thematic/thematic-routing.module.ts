import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThematicPage } from './thematic.page';

const routes: Routes = [
  {
    path: '',
    component: ThematicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThematicPageRoutingModule {}
