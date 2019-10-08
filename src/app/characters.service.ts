import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Character } from './Character';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private readonly http: HttpClient) {}

  public fetchCharacters(count = 20): Observable<Character[]> {
    const uri = 'https://anapioficeandfire.com/api/characters';

    return this.http.get<Character[]>(uri, {
      params: new HttpParams().set('pageSize', count.toString()),
    });
  }
}
