import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, switchMap } from 'rxjs/operators';
import VideoServiceApi from '../models/api-service.model';
import { VideoStatsExtented } from '../models/search-item.model';
import { API_SERVICE } from '../providers/video-service.provider';

@Injectable({
  providedIn: 'root',
})
export class SearchVideoService {
  private readonly searchString$ = new BehaviorSubject<string>('');

  public readonly videos$: Observable<VideoStatsExtented[]> = this.searchString$.pipe(
    debounceTime(500),
    distinctUntilChanged(),
    map((searchString) => (searchString.length > 3 ? searchString : '')),
    switchMap((searchString) => this.videoApiService.getVideos(searchString)),
  );

  constructor(@Inject(API_SERVICE) private videoApiService: VideoServiceApi) {}

  searchVideos(name: string) {
    this.searchString$.next(name);
  }

  searchVideoById(name: string) {
    return this.videoApiService.getVideoById(name).pipe(
      pluck('items'),
      map((item) => item[0]),
    );
  }
}
