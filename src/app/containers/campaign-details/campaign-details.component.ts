import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  characters: Character[];

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.charactersService.getCharacters().subscribe(
      (characters: Character[]) => this.characters = characters
    );
  }

}
