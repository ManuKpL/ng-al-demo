import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { HousesListComponent } from './houses-list.component';
import { HouseThumbnailComponent } from './house-thumbnail.component';

@NgModule({
  imports: [SharedModule],
  declarations: [HouseThumbnailComponent, HousesListComponent],
  exports: [HousesListComponent],
})
export class HousesModule {}
