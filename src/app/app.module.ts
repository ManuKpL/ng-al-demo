import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CharactersModule } from '../characters/characters.module';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, CharactersModule],
})
export class AppModule {}
