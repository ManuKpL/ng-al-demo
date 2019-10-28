import { Component } from '@angular/core';

import { AppPage } from 'shared';

@Component({
  template: `
    HOME
  `,
})
export class HomeComponent implements AppPage {
  public pageTitle = 'Accueil';
}
