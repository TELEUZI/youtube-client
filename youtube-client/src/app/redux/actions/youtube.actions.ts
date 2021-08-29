import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { VideoStatsExtented } from 'src/app/youtube/models/search-item.model';

export enum CardActions {
  searchVideos = '[Youtube] Search videos',
  searchVideoById = '[Youtube] Search video by id',
  searchSuccess = '[Youtube] Search Success',
  searchError = '[Youtube] Search Error',
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
  CardActions.searchError,
  props<{ payload: { error: HttpErrorResponse } }>(),
);
