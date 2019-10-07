import { Injectable } from '@angular/core';

import { ICharacter } from './character';

const CHARACTER = {
  id: 1,
  name: 'Luke Skywalker',
  gender: 'Male',
  url: 'https://swapi.co/api/people/1/',
  image: 'https://vignette.wikia.nocookie.net/fr.starwars/images/f/fa/Luke_TLJ.jpg/revision/latest?cb=20180110093251',
};

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public getCharacter(): ICharacter {
    return CHARACTER;
  }
}
