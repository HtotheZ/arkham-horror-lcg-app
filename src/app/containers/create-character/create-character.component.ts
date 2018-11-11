import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Investigator } from 'src/app/interfaces/investigator.interface';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  investigators: Investigator[];

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnInit() {
    this.charactersService.getInvestigators().subscribe(
      (investigators: Investigator[]) => this.investigators = investigators
    );
  }

}
