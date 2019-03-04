import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit {

  character: Character;
  physTrauma = [];
  menTrauma = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(x =>
        this.charactersService.getCharacterById(x.id).subscribe(
          (character: Character) => {
            this.character = character;
            this.physTrauma = new Array(character.physTrauma);
            this.menTrauma = new Array(character.menTrauma);
          }
        ));
  }

  goBack() {
    this.location.back();
  }

  chleb() {
    console.log(this.physTrauma);
  }
}
