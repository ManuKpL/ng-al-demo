import { Component, Input } from '@angular/core';
import { Character } from './Character';

@Component({
  selector: 'sw-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  @Input() public character!: Character;

  public target = '_blank';
}
