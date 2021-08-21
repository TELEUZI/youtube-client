import { Observable } from 'rxjs';
import { VideoStatsExtented } from './search-item.model';

export default interface VideoServiceApi {
  getVideos(name: string): Observable<VideoStatsExtented[]>;
}
