import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './character-details.component';
import { CharactersListComponent } from './characters-list.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, CharactersListComponent, CharacterDetailsComponent],
  imports: [BrowserModule],
})
export class AppModule {}
