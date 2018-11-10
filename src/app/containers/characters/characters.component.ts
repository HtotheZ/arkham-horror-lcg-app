import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

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
