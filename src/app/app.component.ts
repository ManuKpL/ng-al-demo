import { Component, ViewEncapsulation } from '@angular/core';
import { AppPage } from 'shared';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'sw-root',
  template: `
    <sw-nav [pageName]="activatedPageName"></sw-nav>
    <router-outlet (activate)="onRouteActivated($event)"></router-outlet>
  `,
  styleUrls: ['./app.component.scss', '../assets/utils.scss'],
})
export class AppComponent {
  public activatedPageName!: string;

  public onRouteActivated(activatedPage: AppPage): void {
    this.activatedPageName = activatedPage.pageTitle;
  }
}
