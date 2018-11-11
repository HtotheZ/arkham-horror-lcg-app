import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';
import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  characters: Character[];
  notes: Note[];

  constructor(
    private charactersService: CharactersService,
    private notesService: NotesService
  ) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(
      (characters: Character[]) => this.characters = characters
    );
    this.notesService.getNotes().subscribe(
      (notes: Note[]) => this.notes = notes
    );
  }

}
