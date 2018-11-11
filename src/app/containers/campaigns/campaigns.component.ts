import { Component, OnInit } from '@angular/core';
import { Campaign } from 'src/app/interfaces/campaign.interface';
import { CampaignsService } from 'src/app/services/campaigns.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss']
})
export class CampaignsComponent implements OnInit {

  campaigns: Campaign[];

  constructor(
    private campaignsService: CampaignsService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.campaignsService.getCampaigns().subscribe(
      (campaigns: any) => this.campaigns = campaigns
    );
  }
}
