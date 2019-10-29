import { Component } from '@angular/core';

import { AppPage } from 'shared';
import { AuthenticationService } from './authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AppPage {
  public pageTitle = 'Login';

  public login!: string;
  public password!: string;

  constructor(private auth: AuthenticationService) {}

  public onSubmit({ login, password }: any): void {
    this.auth.login(login, password);
  }
}
