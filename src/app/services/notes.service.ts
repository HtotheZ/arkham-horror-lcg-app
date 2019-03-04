import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../interfaces/note.interface';

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

  addNewNote(note: Note) {
    return this.http.post('api/notes', note);
  }

  deleteNoteById(id:number) {
    return this.http.delete(`api/notes/${id}`);
  }
}
