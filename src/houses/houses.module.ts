import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { HouseThumbnailComponent } from './house-thumbnail.component';

@NgModule({
  imports: [SharedModule],
  declarations: [HouseThumbnailComponent],
  exports: [HouseThumbnailComponent],
})
export class HousesModule {}
