import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
} from 'rxjs/operators';
import { YoutubeApiService } from 'src/app/youtube/services/youtube-api.service';
import { searchError, searchSuccess, searchVideos } from '../actions/youtube.actions';

@Injectable({ providedIn: 'root' })
export class YoutubeEffects {
  getVideosEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchVideos),
      switchMap((action) =>
        this.apiService.getVideos(action.payload.videoName).pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter((searchString) => searchString.length > 3),
          map((videos) => searchSuccess({ payload: { videos } })),
          catchError((error: unknown) => {
            console.log(error);
            return of(searchError({ payload: { error: <HttpErrorResponse>error } }));
          }),
        ),
      ),
    );
  });

  constructor(private actions$: Actions, private apiService: YoutubeApiService) {}
}
