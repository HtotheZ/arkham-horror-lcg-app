import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';

import { CampaignsService } from 'src/app/services/campaigns.service';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  campaignForm: FormGroup;

  constructor(
    private location: Location,
    private campaignsService: CampaignsService
    ) { }

  ngOnInit() {
    this.campaignForm = new FormGroup({
      'name': new FormControl(null),
      'date': new FormControl(null),
      'currentScenario': new FormControl(null)
    });
  }

  dateToString(): string {
    const date = new Date();
    const dateString = date.toISOString().slice(0, 10).replace(/-/g, '');
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return day.concat('-' + month + '-' + year);
  }

  onCampaignFormSubmit(): void {
    const campaign = {
      name: this.campaignForm.value.name,
      date: this.dateToString(),
      currentScenario: this.campaignForm.value.currentScenario
    };
    this.campaignsService.addNewCampaign(campaign).subscribe();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
