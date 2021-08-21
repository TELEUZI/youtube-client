import { Pipe, PipeTransform } from '@angular/core';
import { VideoStatsExtented } from '../models/search-item.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: VideoStatsExtented[], input: string): VideoStatsExtented[] {
    if (input) {
      return value.filter((video) => video.snippet.title.includes(input));
    }
    return value;
  }
}
