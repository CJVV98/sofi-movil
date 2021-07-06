import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'favorites',
    loadChildren: () => import('../favorites/favorites.module').then( m => m.FavoritesPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
  }
 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
