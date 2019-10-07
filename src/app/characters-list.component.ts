import { Component, OnInit } from '@angular/core';

import { ICharacter } from './character';
import { CharactersService } from './characters.service';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  public characters!: ICharacter[];

  constructor(private characterService: CharactersService) {}

  public ngOnInit(): void {
    this.readCharacterFromService();
  }

  private readCharacterFromService(): void {
    this.characters = this.characterService.getCharacters();
  }
}
