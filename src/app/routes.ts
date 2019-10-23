import { Routes } from '@angular/router';
import { CharactersListComponent } from 'characters/characters-list.component';
import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
  {
    path: 'characters',
    component: CharactersListComponent,
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
