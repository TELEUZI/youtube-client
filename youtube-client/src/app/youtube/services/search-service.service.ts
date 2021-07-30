import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Video from '../models/search-item.model';
import { MessageService } from './message.service';
import { YoutubeApiService } from './youtube-api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchVideoService {
  constructor(
    private messageService: MessageService,
    private youtubeApiService: YoutubeApiService,
  ) {}

  getVideos(): Observable<Video[]> {
    const heroes = this.youtubeApiService.getVideos();
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: string): Observable<Video> | null {
    let hero: Video | undefined;
    const heroes = this.youtubeApiService.getVideos();
    heroes.subscribe((videos) => {
      hero = videos.find((h) => h.id === id);
    });
    // const hero: Video = YOUTUBE_RESPONSE.items.find((h) => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    if (hero) {
      return of(hero);
    }
    return null;
  }

  // clear(): Video[] {
  //   return [];
  // }
}
