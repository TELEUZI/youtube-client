import { Subject } from 'rxjs';
import Video from './search-item.model';

export default interface VideoServiceApi {
  getVideos(name: string): Subject<Video[]>;
}
