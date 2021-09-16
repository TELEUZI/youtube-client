import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customCardsNodeName, CustomCardsState } from '../state.models';

export const selectCustomCards = createFeatureSelector<CustomCardsState>(customCardsNodeName);
export const selectCard = createSelector(
  selectCustomCards,
  (state: CustomCardsState) => state[customCardsNodeName],
);
