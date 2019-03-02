import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import { Router, ActivatedRoute } from '@angular/router';

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
