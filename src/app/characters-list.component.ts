import { Component, OnInit } from '@angular/core';

import { Character } from './character';
import { CharactersService } from './characters.service';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  public characters!: Character[];

  constructor(private characterService: CharactersService) {}

  public ngOnInit(): void {
    this.readCharacterFromService();
  }

  private readCharacterFromService(): void {
    this.characters = this.characterService.getCharacters();
  }
}
