import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'sw-root',
  template: '<sw-characters-list></sw-characters-list>',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
