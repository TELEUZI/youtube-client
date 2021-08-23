import { inject, InjectionToken } from '@angular/core';
import VideoServiceApi from '../models/api-service.model';
import { YoutubeApiService } from '../services/youtube-api.service';

export const API_SERVICE = new InjectionToken<VideoServiceApi>('VideoServiceApi', {
  factory: () => inject(YoutubeApiService),
});
