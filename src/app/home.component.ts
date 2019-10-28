import { Component } from '@angular/core';

import { AppPage } from 'shared';

@Component({
  template: `
    <section id="content">
      <sw-house-thumbnail></sw-house-thumbnail>
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
