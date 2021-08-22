import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';
import VideoServiceApi from '../models/api-service.model';
import { VideoStatsExtented } from '../models/search-item.model';
import { SearchResponse, SearchVideoResponse } from '../models/search-response.model';
const BASE_API_URL = 'https://youtube.googleapis.com/youtube/v3';
@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService implements VideoServiceApi {
  constructor(private httpClient: HttpClient) {}

  getVideos(name: string): Observable<VideoStatsExtented[]> {
    return name
      ? this.httpClient
          .get<SearchResponse>(`${BASE_API_URL}/search?part=snippet&type=video&q=${name}s`)
          .pipe(
            pluck('items'),
            switchMap((videos) =>
              forkJoin(videos.map((video) => this.getVideoById(video.id.videoId))),
            ),
            map((value) => value.map((item) => item.items[0])),
          )
      : new Observable();
  }

  getVideoById(videoId: string) {
    return this.httpClient.get<SearchVideoResponse>(
      `${BASE_API_URL}/videos?part=snippet&part=statistics&id=${videoId}`,
    );
  }
}
