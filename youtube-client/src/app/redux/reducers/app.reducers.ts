import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import {
  AppState,
  customCardsNodeName,
  routerNodeName,
  searchCardsNodeName,
} from '../state.models';
import { cardReducer } from './card.reducer';
import { youtubeReducer } from './youtube.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  [customCardsNodeName]: cardReducer,
  [searchCardsNodeName]: youtubeReducer,
  [routerNodeName]: routerReducer,
};
