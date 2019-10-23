import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CharacterThumbnailComponent } from './character-thumbnail.component';
import { CharactersListComponent } from './characters-list.component';

@NgModule({
  declarations: [CharacterThumbnailComponent, CharactersListComponent],
  exports: [CharactersListComponent],
  imports: [SharedModule],
})
export class CharactersModule {}
