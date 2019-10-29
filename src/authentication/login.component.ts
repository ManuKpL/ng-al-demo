import { Component } from '@angular/core';

import { AppPage } from 'shared';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AppPage {
  public pageTitle = 'Login';
}
