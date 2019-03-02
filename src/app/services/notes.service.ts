import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private http: HttpClient
  ) { }

  getNotes() {
    return this.http.get('/api/notes');
  }

  getNoteById(id: number) {
    return this.http.get(`api/notes/${id}`);
  }
}
