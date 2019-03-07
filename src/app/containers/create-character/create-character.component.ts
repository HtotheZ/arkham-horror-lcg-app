import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { CharactersService } from 'src/app/services/characters.service';
import { Investigator } from 'src/app/interfaces/investigator.interface';
import { Character } from 'src/app/interfaces/character.interface';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  currentCampaignID: string;
  investigators: Investigator[];
  investigatorForm: FormGroup;
  investigatorData: Investigator;
  characterData: Character;
  characterForm: FormGroup;
  selectedCharacterClass: Investigator;

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.currentCampaignID = params.id);
    this.charactersService.getInvestigators().subscribe(
      (investigators: Investigator[]) => this.investigators = investigators
    );
    this.investigatorForm = new FormGroup({
      'investigator': new FormControl(null),
      'linkImg': new FormControl(null)
    });
    this.characterForm = new FormGroup({
      'investigatorSelection': new FormControl(null)
    });
  }

  onSelect(event): void {
    this.charactersService.getInvestigatorById(event.target.value)
      .subscribe((investigator: Investigator) => this.selectedCharacterClass = investigator);
  }

  onInvestigatorFormSubmit(): void {
    this.investigatorData = {
      name: this.investigatorForm.value.investigator,
      img: this.investigatorForm.value.linkImg,
    };
    this.charactersService.addNewInvestigator(this.investigatorData).subscribe();
    this.goBack();
  }

  onCharacterFormSubmit(): void {
    const campaignID = parseInt(this.currentCampaignID, null);
    this.characterData = {
      name: this.selectedCharacterClass.name,
      img: this.selectedCharacterClass.img,
      physTrauma: 0,
      menTrauma: 0,
      unusedXP: 0,
      currentCampaignID: campaignID
    };
    this.charactersService.addNewCharacter(this.characterData).subscribe();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
