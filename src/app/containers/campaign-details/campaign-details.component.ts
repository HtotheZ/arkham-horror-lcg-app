import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';
import { Note } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';
import { filter, tap, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private charactersService: CharactersService,
    private router: Router,
    private route: ActivatedRoute,
    private notesService: NotesService,
    private campaignsService: CampaignsService
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

  changeScenario(): void {
    this.campaign.currentScenario = this.currentScenario;
    this.isEditScenario = !this.isEditScenario;
  }
}
