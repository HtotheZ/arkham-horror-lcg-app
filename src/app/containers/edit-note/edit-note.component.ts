import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from 'src/app/services/notes.service';
import { CampaignsService } from 'src/app/services/campaigns.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  }

  goBack(): void {
    this.router.navigate([`campaign-details/${this.note.currentCampaignID}`]);
  }

  onSubmit(): void {
    this.goBack();
  }

  deleteNote(): void {
    this.notesService.deleteNoteById(this.note.id).subscribe();
    this.goBack();
  }

}
