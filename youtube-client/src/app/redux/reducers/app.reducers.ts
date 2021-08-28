import { ActionReducerMap } from '@ngrx/store';
import { AppState, customCardsNodeName, searchCardsNodeName } from '../state.models';
import { cardReducer } from './card.reducer';
import { youtubeReducer } from './youtube.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  [customCardsNodeName]: cardReducer,
  [searchCardsNodeName]: youtubeReducer,
};
