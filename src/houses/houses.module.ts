import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { HousesListComponent } from './houses-list.component';
import { HouseThumbnailComponent } from './house-thumbnail.component';
import { HouseEditionComponent } from './house-edition.component';

@NgModule({
  imports: [SharedModule],
  declarations: [HouseThumbnailComponent, HousesListComponent, HouseEditionComponent],
  exports: [HousesListComponent, HouseEditionComponent],
})
export class HousesModule {}
