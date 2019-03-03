import { Investigator } from './investigator.interface';

export interface Character extends Investigator {
  physTrauma: number;
  menTrauma: number;
  unusedXP: number;
  currentCampaignID: number;
}
