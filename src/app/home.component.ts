import { Component } from '@angular/core';

@Component({
  template: `
    <header class="bg-blue padded">
      <h1>Home Page</h1>
      <sw-button routerLink="/characters" primary>Characters list</sw-button>
    </header>
  `,
})
export class HomeComponent {}
