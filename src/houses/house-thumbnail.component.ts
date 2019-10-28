import { Component } from '@angular/core';

import { House } from './House';

@Component({
  selector: 'sw-house-thumbnail',
  templateUrl: './house-thumbnail.component.html',
  styleUrls: ['./house-thumbnail.component.scss'],
})
export class HouseThumbnailComponent {
  public house: House = {
    id: 229,
    name: 'House Lannister of Casterly Rock',
    region: 'The Westerlands',
    coatOfArms: 'A gold lion, on a crimson field',
    words: 'Hear Me Roar!',
    seat: 'Casterly Rock',
    imagePath: 'https://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/1200px-House_Lannister.svg.png',
  };
}
