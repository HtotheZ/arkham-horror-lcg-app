import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/interfaces/note.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  currentCampaignID: string;
  noteData: Note;
  profileForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notesService: NotesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.currentCampaignID = params.id);
    this.profileForm = new FormGroup({
      'note': new FormControl(null)
    })
  }

  onSubmit(): void {
    const campaignID = parseInt(this.currentCampaignID);
    this.noteData = {
      body: this.profileForm.value.note,
      currentCampaignID: campaignID
    };
    this.notesService.addNewNote(this.noteData).subscribe();
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }
}
