import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';
import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';
import { CampaignsService } from 'src/app/services/campaigns.service';
import { Campaign } from 'src/app/interfaces/campaign.interface';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent implements OnInit {

  campaign: Campaign;
  characters: Character[];
  notes: Note[];
  isEditScenario: boolean;
  currentScenario: string;
  isCampaignEmpty: boolean = true;

  constructor(
    private charactersService: CharactersService,
    private router: Router,
    private route: ActivatedRoute,
    private notesService: NotesService,
    private campaignsService: CampaignsService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(x =>
      this.campaignsService.getCampaignById(x.id).subscribe(
        (campaign: Campaign) => {
          this.campaign = campaign;
          this.charactersService.getCharacters().subscribe(
            (characters: Character[]) => this.characters = characters.filter(char => char.currentCampaignID === this.campaign.id)
          );
          this.notesService.getNotes().subscribe(
            (notes: Note[]) => this.notes = notes.filter(note => note.currentCampaignID === this.campaign.id)
          );
          this.currentScenario = this.campaign.currentScenario;
        }
      )
    );
  }

  deleteCampaign(): void {
    if (this.characters.length === 0 && this.notes.length === 0) {
      this.campaignsService.deleteNoteById(this.campaign.id).subscribe();
      this.goBack();
    } else {
      this.isCampaignEmpty = false;
    }
  }

  changeScenario(): void {
    this.campaign.currentScenario = this.currentScenario;
    if(this.isEditScenario) {
      const campaignData = {
        id: this.campaign.id,
        name: this.campaign.name,
        date: this.campaign.date,
        currentScenario: this.campaign.currentScenario
      }
      this.campaignsService.editCampaign(campaignData).subscribe();
    }
    this.isEditScenario = !this.isEditScenario;
  }

  goBack(): void {
    this.router.navigate(['']);
  }
}
