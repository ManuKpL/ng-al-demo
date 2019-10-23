import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from './Character';

const mapCharacters = map<any[], Character[]>(data => data.map(el => new Character(el)));

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private readonly http: HttpClient) {}

  public fetchCharacters(): Observable<Character[]> {
    return this._fetchCharactersResource().pipe(mapCharacters);
  }

  private _fetchCharactersResource(): Observable<any[]> {
    const uri = 'http://localhost:3000/characters';

    return this.http.get<any[]>(uri);
  }
}
