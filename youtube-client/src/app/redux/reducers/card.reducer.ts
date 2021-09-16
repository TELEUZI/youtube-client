import { Action, createReducer, on } from '@ngrx/store';
import { createCard } from '../actions/card.actions';
import { customCardsNodeName, CustomCardsState, initialCustomCardsState } from '../state.models';

const reducer = createReducer(
  initialCustomCardsState,
  on(
    createCard,
    (state, { payload }): CustomCardsState => ({
      ...state,
      [customCardsNodeName]: [...state[customCardsNodeName], payload],
    }),
  ),
);
export function cardReducer(state: CustomCardsState | undefined, action: Action) {
  return reducer(state, action);
}
