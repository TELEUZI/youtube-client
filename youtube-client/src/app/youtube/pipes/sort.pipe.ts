import { Pipe, PipeTransform } from '@angular/core';
import { VideoStatsExtented } from '../models/search-item.model';
import SortFieldType from '../models/sort-field.model';

function sortByDateDesc(a: VideoStatsExtented, b: VideoStatsExtented): number {
  if (a.statistics && b.statistics) return +b.statistics.viewCount - +a.statistics.viewCount;
  return -1;
}
function sortByDateAsc(a: VideoStatsExtented, b: VideoStatsExtented): number {
  if (a.statistics && b.statistics) return +a.statistics.viewCount - +b.statistics.viewCount;
  return -1;
}

function sortByViewsDesc(a: VideoStatsExtented, b: VideoStatsExtented): number {
  return Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt);
}
function sortByViewsAsc(a: VideoStatsExtented, b: VideoStatsExtented): number {
  return Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt);
}
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    videos: VideoStatsExtented[],
    param: SortFieldType,
    order: number,
  ): VideoStatsExtented[] {
    if (videos) {
      switch (param) {
        case SortFieldType.DATE:
          return [...videos].sort(order ? sortByDateDesc : sortByDateAsc);
        case SortFieldType.VIEWS:
          return [...videos].sort(order ? sortByViewsDesc : sortByViewsAsc);
        default:
          return videos;
      }
    }
    return [];
  }
}
