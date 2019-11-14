import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from './Character';

@Component({
  selector: 'sw-character-thumbnail',
  templateUrl: './character-thumbnail.component.html',
  styleUrls: ['./character-thumbnail.component.scss'],
})
export class CharacterThumbnailComponent {
  @Input() public character!: Character;
  @Output() public onSelect = new EventEmitter<Character>();

  public openCharacterDetails(): void {
    this.onSelect.emit(this.character);
  }
}
