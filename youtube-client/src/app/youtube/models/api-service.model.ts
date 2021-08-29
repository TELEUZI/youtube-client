import { Observable } from 'rxjs';
import { VideoStatsExtented } from './search-item.model';
import { SearchVideoResponse } from './search-response.model';

export default interface VideoServiceApi {
  getVideos(name: string): Observable<VideoStatsExtented[]>;
  getVideoById(videoId: string): Observable<SearchVideoResponse>;
}
