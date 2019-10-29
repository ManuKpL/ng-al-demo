import { Routes } from '@angular/router';

import { HousesListComponent } from './houses-list.component';

export const housesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HousesListComponent,
  },
];
