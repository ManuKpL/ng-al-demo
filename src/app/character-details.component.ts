import { Component, Input, OnInit } from '@angular/core';
import { Character } from './Character';

@Component({
  selector: 'sw-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  @Input() public character!: Character;

  public hasName!: boolean;
  public target = '_blank';

  public ngOnInit(): void {
    this.hasName = this.character.hasName();
  }
}
