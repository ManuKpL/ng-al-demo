import { Component } from '@angular/core';

@Component({
  selector: 'sw-characters-list',
  templateUrl: './characters-list.component.html',
})
export class CharactersListComponent {
  public character = {
    id: 1,
    name: 'Luke Skywalker',
    gender: 'male',
    url: 'https://swapi.co/api/people/1/',
  };
}
