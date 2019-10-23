import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharacterThumbnailComponent } from './character-thumbnail.component';
import { CharactersListComponent } from './characters-list.component';

@NgModule({
  declarations: [CharacterThumbnailComponent, CharactersListComponent],
  exports: [CharactersListComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class CharactersModule {}
