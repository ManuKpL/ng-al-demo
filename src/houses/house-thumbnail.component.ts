import { Component, Input } from '@angular/core';

import { House } from './House';

@Component({
  selector: 'sw-house-thumbnail',
  templateUrl: './house-thumbnail.component.html',
  styleUrls: ['./house-thumbnail.component.scss'],
})
export class HouseThumbnailComponent {
  @Input() public house!: House;
}
