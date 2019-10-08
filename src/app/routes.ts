import { Routes } from '@angular/router';
import { CharactersListComponent } from 'characters/characters-list.component';

export const appRoutes: Routes = [
  {
    path: 'characters-list',
    component: CharactersListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/characters-list',
  },
];
