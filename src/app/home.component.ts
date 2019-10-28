import { Component } from '@angular/core';

import { AppPage } from 'shared';

@Component({
  template: `
    <sw-houses-list></sw-houses-list>
  `,
})
export class HomeComponent implements AppPage {
  public pageTitle = 'Accueil';
}
