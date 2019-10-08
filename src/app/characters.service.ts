import { Injectable } from '@angular/core';

import { Character } from './Character';

const CHARACTERS: Character[] = [
  {
    id: 583,
    name: 'Jon Snow',
    gender: 'Male',
    titles: ['Lord Commander of the Night s Watch'],
    url: 'https://anapioficeandfire.com/api/characters/583',
    image:
      'https://resize-parismatch.lanmedia.fr/r/625,417,center-middle,ffffff/img/var/news/storage/images/paris-match/culture/medias/game-of-thrones-kit-harington-devoile-le-destin-de-jon-snow-apres-la-fin-de-la-serie-1642918/26815338-1-fre-FR/Game-of-Thrones-Kit-Harington-devoile-le-destin-de-Jon-Snow-apres-la-fin-de-la-serie.jpg',
  },
  {
    id: 1093,
    name: 'Walder Frey',
    gender: 'Male',
    titles: ['Lord of the Crossing'],
    url: 'https://anapioficeandfire.com/api/characters/1093',
    image: 'http://images4.fanpop.com/image/photos/22500000/Walder-Frey-game-of-thrones-22531410-816-593.png',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public getCharacters(): Character[] {
    return CHARACTERS;
  }
}
