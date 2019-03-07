import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Campaign } from 'src/app/interfaces/campaign.interface';
import { CampaignsService } from 'src/app/services/campaigns.service';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  campaigns: Campaign[];

  constructor(
    private campaignsService: CampaignsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.campaignsService.getCampaigns().subscribe(
      (campaigns: any) => this.campaigns = campaigns
    );
  }

  goToCampaignDetails(id: number) {
    this.router.navigate([`campaign-details/${id}`]);
  }
}
