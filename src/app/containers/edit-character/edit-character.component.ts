import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

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

  editCharacter(): void {
    const characterData = {
      id: this.character.id,
      img: this.character.img,
      name: this.character.name,
      physTrauma: this.physTrauma.length,
      menTrauma: this.menTrauma.length,
      unusedXP: this.character.unusedXP,
      currentCampaignID: this.character.currentCampaignID
    };
    this.charactersService.editCharacter(characterData).subscribe();
    this.goBack();
  }

  deleteCharacter(): void {
    this.charactersService.deleteCharacterById(this.character.id).subscribe();
    this.goBack();
  }

  incrementTrauma(type: number): void {
    if (this.physTrauma.length < 12 && this.menTrauma.length < 12) {
      if (type === 1) {
        this.physTrauma.push(null);
      } else {
        this.menTrauma.push(null);
      }
    }
  }

  decrementTrauma(type: number): void {
    if (type === 1) {
      this.physTrauma.pop();
    } else {
      this.menTrauma.pop();
    }
  }

  incrementXP(): void {
    this.character.unusedXP++;
  }

  decrementXP(): void {
    this.character.unusedXP--;
  }

  goBack(): void {
    this.location.back();
  }
}
