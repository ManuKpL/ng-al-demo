import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public currentUser!: any;

  public login(login: string, password: string): void {
    this.currentUser = {
      login,
      password,
    };
  }
}
