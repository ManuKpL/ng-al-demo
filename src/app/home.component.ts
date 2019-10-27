import { Component } from '@angular/core';

import { AppPage } from 'shared';

@Component({
  template: `
    <section id="content">
      <!-- ADD CONTENT HERE -->
    </section>
  `,
  styles: [
    `
      section {
        display: grid;
        grid-gap: 1rem;
      }
    `,
    `
      section#content {
        grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
      }
    `,
  ],
})
export class HomeComponent implements AppPage {
  public pageTitle = 'Accueil';
}
