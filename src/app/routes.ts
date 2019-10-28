import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('characters/characters.module').then(m => m.CharactersModule),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];
