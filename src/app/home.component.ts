import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Home Page</h1>
    <a routerLink="/characters-list">Characters list</a>
  `,
  styles: ['a { color: white }'],
})
export class HomeComponent {}
