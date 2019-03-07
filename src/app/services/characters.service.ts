import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Investigator } from '../interfaces/investigator.interface';
import { Character } from '../interfaces/character.interface';

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

  getCharacterById(id: number) {
    return this.http.get(`api/characters/${id}`);
  }

  addNewCharacter(character: Character) {
    return this.http.post('api/characters', character);
  }

  editCharacter(character: Character) {
    return this.http.put(`api/characters/${character.id}`, character);
  }

  deleteCharacterById(id: number) {
    return this.http.delete(`api/characters/${id}`);
  }

  getInvestigators() {
    return this.http.get('api/investigators');
  }

  getInvestigatorById(id: number) {
    return this.http.get(`api/investigators/${id}`);
  }

  addNewInvestigator(investigator: Investigator) {
    return this.http.post('api/investigators', investigator);
  }
}
