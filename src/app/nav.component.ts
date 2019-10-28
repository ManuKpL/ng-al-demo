import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() public pageName!: string;
}
