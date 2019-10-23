import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'sw-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss', '../assets/utils.scss'],
})
export class AppComponent {}
