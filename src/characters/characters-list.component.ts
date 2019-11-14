import { Component, OnInit } from '@angular/core';

import { AppPage } from 'shared';
import { Character } from './Character';
import { CharactersService } from './characters.service';

@Component({
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit, AppPage {
  public pageTitle = 'Liste de Personnages';
  public filterPlaceholder = 'Filtrer par nom';
  public characters: Character[] = [];
  public selectedCharacter!: Character;
  public filterInput!: string;

  private fullCharactersList!: Character[];

  constructor(private characterService: CharactersService) {}

  public ngOnInit(): void {
    this.readCharactersFromService();
  }

  public onFilter(): void {
    this.characters = this.fullCharactersList.filter(character => {
      return character.name.toLowerCase().startsWith(this.filterInput.toLowerCase());
    });
  }

  public clearFilter(): void {
    this.characters = this.fullCharactersList;
    this.filterInput = '';
  }

  public onSelectCharacter(character: Character): void {
    this.selectedCharacter = character;
  }

  private readCharactersFromService(): void {
    this.characterService.fetchCharacters().subscribe(characters => {
      this.fullCharactersList = characters;
      this.characters = this.fullCharactersList;
    });
  }
}
