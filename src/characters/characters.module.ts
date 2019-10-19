import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './character-details.component';
import { CharactersListComponent } from './characters-list.component';

@NgModule({
  declarations: [CharacterDetailsComponent, CharactersListComponent],
  exports: [CharactersListComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
})
export class CharactersModule {}
