import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './containers/campaigns/campaigns.component';
import { CreateCampaignComponent } from './containers/create-campaign/create-campaign.component';
import { CampaignDetailsComponent } from './containers/campaign-details/campaign-details.component';
import { CreateCharacterComponent } from './containers/create-character/create-character.component';
import { CreateNoteComponent } from './containers/create-note/create-note.component';
// import { CharactersListComponent } from './components/characters-list/characters-list.component';

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
    component: CampaignDetailsComponent,
    // children: [
    //   {
    //     path: 'add-character',
    //     component: CreateCharacterComponent
    //   },
    // {
    //   path: '',
    //   component: CharactersListComponent
    // }
    // ]
  },
  {
    path: 'campaign-details/add-character',
    component: CreateCharacterComponent
  },
  {
    path: 'campaign-details/add-note',
    component: CreateNoteComponent
  }
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
