import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import YOUTUBE_RESPONSE from '../models/mock-response';
import Video from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  constructor(private httpClient: HttpClient) {}

  // eslint-disable-next-line class-methods-use-this
  getVideos(): Observable<Video[]> {
    const heroes = of(YOUTUBE_RESPONSE.items);
    return heroes;
  }
}
