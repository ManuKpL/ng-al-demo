import { Routes } from '@angular/router';

import { HousesListComponent } from './houses-list.component';
import { HouseEditionComponent } from './house-edition.component';

export const housesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HousesListComponent,
  },
  {
    path: ':id/edit',
    component: HouseEditionComponent,
  },
];
