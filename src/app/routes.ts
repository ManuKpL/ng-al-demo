import { Routes } from '@angular/router';

import { charactersRoutes } from 'characters/routes';
import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
  {
    path: 'characters',
    children: charactersRoutes,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];
