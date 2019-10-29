import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { House } from './House';

@Injectable({
  providedIn: 'root',
})
export class HousesService {
  private houses: House[] = [
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

  public fetchHouses(): Observable<House[]> {
    return of(this.houses);
  }
}
