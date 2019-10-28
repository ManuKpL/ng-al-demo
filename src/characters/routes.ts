import { Routes } from '@angular/router';

import { CharactersListComponent } from './characters-list.component';

export const charactersRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CharactersListComponent,
  },
];
