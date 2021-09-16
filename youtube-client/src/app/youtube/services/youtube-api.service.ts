import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, pluck, switchMap } from 'rxjs/operators';
import VideoServiceApi from '../models/api-service.model';
import { Video, VideoStatsExtented } from '../models/search-item.model';
import { SearchResponse, SearchVideoResponse } from '../models/search-response.model';

const BASE_API_URL = 'https://youtube.googleapis.com/youtube/v3';
@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService implements VideoServiceApi {
  constructor(private readonly httpClient: HttpClient) {}

  getVideos(name: string): Observable<VideoStatsExtented[]> {
    return name
      ? this.httpClient
          .get<SearchResponse>(`${BASE_API_URL}/search?part=snippet&type=video&q=${name}`)
          .pipe(
            pluck('items'),
            switchMap((videos: Video[]) =>
              forkJoin(videos.map((video) => this.getVideoById(video.id.videoId))),
            ),
            map((value) => value.map((item) => item.items[0])),
            catchError((error: unknown) => {
              console.error(error);
              return of([]);
            }),
          )
      : new Observable();
  }

  getVideoById(videoId: string) {
    return this.httpClient.get<SearchVideoResponse>(
      `${BASE_API_URL}/videos?part=snippet&part=statistics&id=${videoId}`,
    );
  }
}
