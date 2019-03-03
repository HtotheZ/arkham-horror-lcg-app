import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignsComponent } from './containers/campaigns/campaigns.component';
import { CreateCampaignComponent } from './containers/create-campaign/create-campaign.component';
import { CampaignDetailsComponent } from './containers/campaign-details/campaign-details.component';
import { CreateCharacterComponent } from './containers/create-character/create-character.component';
import { CreateNoteComponent } from './containers/create-note/create-note.component';
import { EditCharacterComponent } from './containers/edit-character/edit-character.component';
import { EditNoteComponent } from './containers/edit-note/edit-note.component';
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
    path: 'campaign-details/:id',
    component: CampaignDetailsComponent,
    // children: [
    //   {
    //     path: 'add-character',
    //     component: CreateCharacterComponent
    //   },
    // ]
    // {
    //   path: '',
    //   component: CharactersListComponent
    // }
    // ]
  },
  {
    path: 'campaign-details/:id/add-character',
    component: CreateCharacterComponent
  },
  {
    path: 'campaign-details/:id/edit-character/:id',
    component: EditCharacterComponent
  },
  {
    path: 'campaign-details/:id/add-note',
    component: CreateNoteComponent
  },
  {
    path: 'campaign-details/:id/edit-note/:id',
    component: EditNoteComponent
  },
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
