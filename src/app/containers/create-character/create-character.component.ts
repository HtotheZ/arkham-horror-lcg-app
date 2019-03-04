import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { Investigator } from 'src/app/interfaces/investigator.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  investigators: Investigator[];

  constructor(
    private charactersService: CharactersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.charactersService.getInvestigators().subscribe(
      (investigators: Investigator[]) => this.investigators = investigators
    );
  }

  goBack(): void {
    this.location.back();
  }

}
