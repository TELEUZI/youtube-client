import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import VideoServiceApi, { API_SERVICE } from '../models/api-service.model';
import Video from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchVideoService {
  private readonly searchString$ = new BehaviorSubject<string>('');

  public readonly videos$: Observable<Video[]> = this.searchString$.pipe(
    switchMap((searchString) => this.videoApiService.getVideos(searchString)),
  );

  constructor(@Inject(API_SERVICE) private videoApiService: VideoServiceApi) {}

  searchVideos(name: string) {
    this.searchString$.next(name);
  }

  getVideos(): Observable<Video[]> {
    return this.videos$;
  }
}
