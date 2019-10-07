import { Component } from '@angular/core';

import { ICharacter } from './character';
import { CharactersService } from './characters.service';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent {
  public character!: ICharacter;

  constructor(private characterService: CharactersService) {
    this.character = this.characterService.getCharacter();
  }
}
