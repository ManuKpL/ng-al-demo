import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Character } from './Character';

const mapCharacters = map<any[], Character[]>(data => data.map(el => new Character(el)));

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  public characters!: Character[];

  constructor(private readonly http: HttpClient) {}

  public fetchCharacters(): Observable<Character[]> {
    return this._fetchCharactersResource().pipe(
      mapCharacters,
      tap(characters => {
        this.characters = characters;
      }),
    );
  }

  private _fetchCharactersResource(): Observable<any[]> {
    const uri = '/api/characters';

    return this.http.get<any[]>(uri);
  }
}
