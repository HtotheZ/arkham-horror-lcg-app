import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note: Note;
  profileForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notesService: NotesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(x =>
      this.notesService.getNoteById(x.id).subscribe(
        (note: Note) => this.note = note
      ));
    this.profileForm = new FormGroup({
      'note': new FormControl(null)
    });
    this.profileForm.setValue({
      'note': this.note.body
    });
  }

  goBack(): void {
    this.router.navigate([`campaign-details/${this.note.currentCampaignID}`]);
  }

  onSubmit(): void {
    const note = {
      id: this.note.id,
      body: this.profileForm.value.note,
      currentCampaignID: this.note.currentCampaignID
    };
    this.notesService.editNote(note).subscribe();
    this.goBack();
  }

  deleteNote(): void {
    this.notesService.deleteNoteById(this.note.id).subscribe();
    this.goBack();
  }

}
