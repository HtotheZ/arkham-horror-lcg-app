import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
