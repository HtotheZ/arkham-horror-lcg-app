import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './containers/campaigns/campaigns.component';
import { CreateCampaignComponent } from './containers/create-campaign/create-campaign.component';
import { CampaignDetailsComponent } from './containers/campaign-details/campaign-details.component';
// import { EditCharacterComponent } from './containers/edit-character/edit-character.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignsComponent
  },
  {
    path: 'create-campaign',
    component: CreateCampaignComponent
  },
  {
    path: 'campaign-details',
    component: CampaignDetailsComponent
  },
  // {
  //   path: 'edit-character',
  //   component: EditCharacterComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
