import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from './Character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private readonly http: HttpClient) {}

  public fetchCharacters(count = 20): Observable<Character[]> {
    const uri = 'https://anapioficeandfire.com/api/characters';
    const options = {
      params: new HttpParams().set('pageSize', count.toString()),
    };

    return this.http.get<Character[]>(uri, options).pipe(map(charsData => charsData.map(data => new Character(data))));
  }
}
