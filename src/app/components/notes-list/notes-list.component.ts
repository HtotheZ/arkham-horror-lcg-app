import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Note } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {

  @Input() notes: Note[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  editNote(id: number) {
    this.router.navigate([`edit-note/${id}`], { relativeTo: this.route });
  }

}
