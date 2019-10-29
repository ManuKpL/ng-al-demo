import { Component } from '@angular/core';

@Component({
  selector: 'sw-info',
  template: `
    <div class="box padded spaced bg-green color-white text-center">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      div:empty {
        display: none;
      }
    `,
  ],
})
export class InfoComponent {}
