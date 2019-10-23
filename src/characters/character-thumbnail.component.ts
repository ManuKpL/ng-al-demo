import { Component, Input } from '@angular/core';
import { Character } from './Character';

@Component({
  selector: 'sw-character-details',
  templateUrl: './character-thumbnail.component.html',
  styleUrls: ['./character-thumbnail.component.scss'],
})
export class CharacterThumbnailComponent {
  @Input() public character!: Character;

  public openCharacterDetails(): void {
    console.info('Open details for character', this.character);
  }
}
