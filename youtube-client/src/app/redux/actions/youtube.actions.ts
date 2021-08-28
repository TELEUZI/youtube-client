import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { VideoStatsExtented } from 'src/app/youtube/models/search-item.model';

export enum CardActions {
  searchVideos = '[Youtube] Search videos',
  searchVideoById = '[Youtube] Search video by id',
  searchSuccess = '[Youtube] Search Success',
  // delete = '[Youtube] Delete card by title',
}

export const searchVideos = createAction(
  CardActions.searchVideos,
  props<{ payload: { videoName: string } }>(),
);

export const searchVideo = createAction(
  CardActions.searchVideoById,
  props<{ payload: { id: string } }>(),
);
export const searchSuccess = createAction(
  CardActions.searchSuccess,
  props<{ payload: { videos: VideoStatsExtented[] } }>(),
);
export const searchError = createAction(
  CardActions.searchSuccess,
  props<{ payload: { error: HttpErrorResponse } }>(),
);
// export const deleteCard = createAction(CardActions.delete, props<{ payload: { title: string } }>());
// export type CustomCardActions = typeof createCard | typeof deleteCard;
// export const action = createAction('[Source] Event', props<{ payload: CustomCard }>());
