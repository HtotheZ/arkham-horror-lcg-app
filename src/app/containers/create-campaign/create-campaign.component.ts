import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-campaign',
  templateUrl: './create-campaign.component.html',
  styleUrls: ['./create-campaign.component.scss']
})
export class CreateCampaignComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }
}
