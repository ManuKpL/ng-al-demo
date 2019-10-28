import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'shared';
import { CharactersModule } from 'characters';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { appRoutes } from './routes';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, HomeComponent, NavComponent],
  imports: [BrowserModule, CharactersModule, SharedModule, RouterModule.forRoot(appRoutes)],
})
export class AppModule {}
