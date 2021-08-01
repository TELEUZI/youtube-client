import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Video from '../models/search-item.model';
import { SearchResponse } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  constructor(private httpClient: HttpClient) {}

  getVideos(): Observable<Video[]> {
    const heroes = this.httpClient.get<SearchResponse>('../../../assets/mock-response.json');
    const videos = heroes.pipe(map((response) => response.items));
    return videos;
  }
}
