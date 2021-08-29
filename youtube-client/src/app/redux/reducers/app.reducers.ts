import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AppState, customCardsNodeName, searchCardsNodeName } from '../state.models';
import { cardReducer } from './card.reducer';
import { youtubeReducer } from './youtube.reducer';

export const appReducers: ActionReducerMap<AppState> = {
  [customCardsNodeName]: cardReducer,
  [searchCardsNodeName]: youtubeReducer,
  router: routerReducer,
};
// export interface StoreRootState {
//   router: RouterReducerState<any>;
// }
// export const reducers: ActionReducerMap<StoreRootState> = {};
