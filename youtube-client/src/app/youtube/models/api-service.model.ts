import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';
import Video from './search-item.model';

export const API_SERVICE = new InjectionToken<VideoServiceApi>('VideoServiceApi');
export default interface VideoServiceApi {
  getVideos(name: string): Subject<Video[]>;
}
