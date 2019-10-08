import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CharactersModule } from '../characters/characters.module';
import { AppComponent } from './app.component';
import { appRoutes } from './routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, CharactersModule, RouterModule.forRoot(appRoutes)],
})
export class AppModule {}
