import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AppPage } from 'shared';
import { Character } from './Character';
import { CharactersService } from './characters.service';

@Component({
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit, AppPage {
  public pageTitle = 'Liste de Personnages';
  public characters$!: Observable<Character[]>;
  public selectedCharacter!: Character;

  constructor(private characterService: CharactersService) {}

  public ngOnInit(): void {
    this.readCharactersFromService();
  }

  public onSelectCharacter(character: Character): void {
    this.selectedCharacter = character;
  }

  private readCharactersFromService(): void {
    this.characters$ = this.characterService.fetchCharacters();
  }
}
