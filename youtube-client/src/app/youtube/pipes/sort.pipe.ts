import { Pipe, PipeTransform } from '@angular/core';
import Video from '../models/search-item.model';
import SortFieldType from '../models/sort-field.model';

function sortByDateDesc(a: Video, b: Video): number {
  return +b.statistics.viewCount - +a.statistics.viewCount;
}
function sortByDateAsc(a: Video, b: Video): number {
  return +a.statistics.viewCount - +b.statistics.viewCount;
}

function sortByViewsDesc(a: Video, b: Video): number {
  return Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt);
}
function sortByViewsAsc(a: Video, b: Video): number {
  return Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt);
}
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(videos: Video[], param: SortFieldType, order: number): Video[] {
    if (videos) {
      switch (param) {
        case SortFieldType.DATE:
          return videos.sort(order ? sortByDateDesc : sortByDateAsc);
        case SortFieldType.VIEWS:
          return videos.sort(order ? sortByViewsDesc : sortByViewsAsc);
        default:
          return videos;
      }
    }
    return [];
  }
}
