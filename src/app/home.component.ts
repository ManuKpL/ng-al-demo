import { Component } from '@angular/core';

@Component({
  template: `
    <header class="bg-blue padded spaced">
      <h1>Home Page</h1>
    </header>

    <section id="buttons">
      <sw-button routerLink="/characters" primary>Characters list</sw-button>
      <sw-button routerLink="/houses" primary>Houses list</sw-button>
    </section>
  `,
  styles: [
    `
      #buttons {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(2, max-content);
      }
    `,
  ],
})
export class HomeComponent {}
