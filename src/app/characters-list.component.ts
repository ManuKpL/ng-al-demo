import { Component } from '@angular/core';

import { ICharacter } from './character';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  public character: ICharacter = {
    id: 1,
    name: 'Luke Skywalker',
    gender: 'male',
    url: 'https://swapi.co/api/people/1/',
    image: 'https://vignette.wikia.nocookie.net/fr.starwars/images/f/fa/Luke_TLJ.jpg/revision/latest?cb=20180110093251',
  };
}
