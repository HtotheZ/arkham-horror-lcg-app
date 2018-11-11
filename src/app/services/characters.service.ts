import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters() {
    return this.http.get('/api/characters');
  }

  getCharacterById(id) {
    return this.http.get(`api/characters/${id}`);
  }

  getInvestigators() {
    return this.http.get('api/investigators');
  }
}
