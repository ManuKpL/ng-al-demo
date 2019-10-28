import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { charactersRoutes } from './routes';
import { SharedModule } from '../shared/shared.module';
import { CharacterThumbnailComponent } from './character-thumbnail.component';
import { CharactersListComponent } from './characters-list.component';

@NgModule({
  declarations: [CharacterThumbnailComponent, CharactersListComponent],
  exports: [CharactersListComponent],
  imports: [SharedModule, RouterModule.forChild(charactersRoutes)],
})
export class CharactersModule {}
