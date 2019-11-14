import { Component, Input } from '@angular/core';
import { AuthenticationService } from 'authentication';

@Component({
  selector: 'sw-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() public pageName!: string;

  constructor(public auth: AuthenticationService) {}
}
