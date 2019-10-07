import { Component, Input } from '@angular/core';
import { ICharacter } from './character';

@Component({
  selector: 'sw-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent {
  @Input() public character!: ICharacter;

  public target = '_blank';
}
