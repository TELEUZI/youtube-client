import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { VideoStatsExtented } from 'src/app/youtube/models/search-item.model';

const enum YotubeActions {
  searchVideos = '[Youtube] Search videos',
  searchVideoById = '[Youtube] Search video by id',
  searchSuccess = '[Youtube] Search Success',
  searchError = '[Youtube] Search Error',
}

export const searchVideos = createAction(
  YotubeActions.searchVideos,
  props<{ payload: { videoName: string } }>(),
);

export const searchVideo = createAction(
  YotubeActions.searchVideoById,
  props<{ payload: { id: string } }>(),
);
export const searchSuccess = createAction(
  YotubeActions.searchSuccess,
  props<{ payload: { videos: VideoStatsExtented[] } }>(),
);
export const searchError = createAction(
  YotubeActions.searchError,
  props<{ payload: { error: HttpErrorResponse } }>(),
);
