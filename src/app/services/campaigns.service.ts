import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

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

}
