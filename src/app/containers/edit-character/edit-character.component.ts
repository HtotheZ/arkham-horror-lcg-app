import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit {

  character: Character;

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(x =>
        this.charactersService.getCharacterById(x.id).subscribe(
          (character: Character) => this.character = character
        ));
  }
}
