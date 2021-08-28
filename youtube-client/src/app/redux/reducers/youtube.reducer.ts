import { createReducer, on } from '@ngrx/store';
import { searchSuccess } from '../actions/youtube.actions';
import { initialSearchCardsState, searchCardsNodeName, SearchCardsState } from '../state.models';

const reducer = createReducer(
  initialSearchCardsState,
  on(
    searchSuccess,
    (state, { payload }): SearchCardsState => ({
      ...state,
      [searchCardsNodeName]: [...payload.videos],
    }),
  ),
);
export function youtubeReducer(state: SearchCardsState | undefined, action: any) {
  return reducer(state, action);
}
