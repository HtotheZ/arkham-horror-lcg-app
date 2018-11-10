import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersService } from './services/characters.service';
import { AppRoutingModule } from './/app-routing.module';
import { CampaignsComponent } from './containers/campaigns/campaigns.component';
import { CreateCampaignComponent } from './containers/create-campaign/create-campaign.component';
import { CampaignsService } from './services/campaigns.service';
import { CampaignDetailsComponent } from './containers/campaign-details/campaign-details.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { EditCharacterComponent } from './containers/edit-character/edit-character.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignsComponent,
    CreateCampaignComponent,
    CampaignDetailsComponent,
    CharactersListComponent,
    EditCharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CharactersService,
    CampaignsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
