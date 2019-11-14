import { Routes } from '@angular/router';

import { charactersRoutes } from 'characters';
import { authRoutes } from 'authentication';
import { housesRoutes } from 'houses';

import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
  {
    path: 'characters',
    children: charactersRoutes,
  },
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: 'houses',
    children: housesRoutes,
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
