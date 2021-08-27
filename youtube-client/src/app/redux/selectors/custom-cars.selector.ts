import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customCardsNodeName, CustomCardsState } from '../state.models';
// export const selectFeatureProperty = createSelector(
//   CustomCardsState,
//   (state: FeatureState, props) => selectLogic,
// );
// export const selectCustomCards = (state: AppState) => state[customCardsNodeName];
export const selectCustomCards = createFeatureSelector<CustomCardsState>(customCardsNodeName);
export const selectCard = createSelector(
  selectCustomCards,
  (state: CustomCardsState) => state[customCardsNodeName],
);
