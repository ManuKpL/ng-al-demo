import { Component } from '@angular/core';

import { AppPage } from 'shared';
import { House } from './House';

@Component({
  selector: 'sw-houses-list',
  template: `
    <section>
      <sw-house-thumbnail *ngFor="let house of houses" [house]="house"></sw-house-thumbnail>
    </section>
  `,
  styleUrls: ['./houses-list.component.scss'],
})
export class HousesListComponent implements AppPage {
  public pageTitle = 'Liste des Maisons';

  public houses: House[] = [
    {
      id: 229,
      name: 'House Lannister of Casterly Rock',
      region: 'The Westerlands',
      coatOfArms: 'A gold lion, on a crimson field',
      words: 'Hear Me Roar!',
      seat: 'Casterly Rock',
      imagePath: 'https://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/1200px-House_Lannister.svg.png',
    },
    {
      id: 362,
      name: 'House Stark of Winterfell',
      region: 'The North',
      coatOfArms: 'A running grey direwolf, on an ice-white field',
      words: 'Winter is Coming',
      seat: 'Winterfell',
      imagePath: 'https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG',
    },
    {
      id: 395,
      name: 'House Tully of Riverrun',
      region: 'The Riverlands',
      coatOfArms: 'A leaping silver trout on a field of blue and mud red',
      words: 'Family, Duty, Honor',
      seat: 'Riverrun',
      imagePath: 'https://vignette.wikia.nocookie.net/gameofthrones/images/b/bd/House-Tully-Main-Shield.PNG',
    },
  ];
}
