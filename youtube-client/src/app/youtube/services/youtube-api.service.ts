import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { pluck } from 'rxjs/operators';
import VideoServiceApi from '../models/api-service.model';
import Video from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService implements VideoServiceApi {
  constructor(private httpClient: HttpClient) {}

  getVideos(name: string): Subject<Video[]> {
    return name
      ? (this.httpClient
          .get<SearchResponse>('../../../assets/mock-response.json')
          .pipe(pluck('items')) as Subject<Video[]>)
      : new Subject();
  }
}
