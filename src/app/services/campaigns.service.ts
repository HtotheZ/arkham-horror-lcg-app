import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Campaign } from '../interfaces/campaign.interface';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  constructor(
    private http: HttpClient
  ) { }

  getCampaigns() {
    return this.http.get('/api/campaigns');
  }

  getCampaignById(id: number) {
    return this.http.get(`api/campaigns/${id}`);
  }

  addNewCampaign(campaign: Campaign) {
    return this.http.post('/api/campaigns', campaign)
  }

}
