import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {

  @Input() notes: Note[];

  constructor() { }

}
