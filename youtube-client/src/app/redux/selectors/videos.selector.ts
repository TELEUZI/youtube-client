import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchCardsNodeName, SearchCardsState } from '../state.models';

const selectVideosFeature = createFeatureSelector<SearchCardsState>(searchCardsNodeName);
export const selectVideos = createSelector(
  selectVideosFeature,
  (state: SearchCardsState) => state[searchCardsNodeName],
);
export const selectVideo = (id: string) =>
  createSelector(selectVideosFeature, (state: SearchCardsState) => {
    return state[searchCardsNodeName].filter((v) => v.id === id)[0];
  });
