import { RouterReducerState } from '@ngrx/router-store';
import { VideoStatsExtented } from '../youtube/models/search-item.model';

export const customCardsNodeName = 'customCards';
export const searchCardsNodeName = 'searchCards';

export interface CustomCard {
  title: string;
  description: string;
  imageLink: string;
  videoLink: string;
  creationDate: string;
}
export interface CustomCardsState {
  [customCardsNodeName]: CustomCard[];
}
export const initialCustomCardsState: CustomCardsState = {
  [customCardsNodeName]: [],
};
export const initialSearchCardsState: SearchCardsState = {
  [searchCardsNodeName]: [],
};
export interface SearchCardsState {
  [searchCardsNodeName]: VideoStatsExtented[];
}

export interface AppState {
  [customCardsNodeName]: CustomCardsState;
  [searchCardsNodeName]: SearchCardsState;
  router: RouterReducerState<any>;
}
