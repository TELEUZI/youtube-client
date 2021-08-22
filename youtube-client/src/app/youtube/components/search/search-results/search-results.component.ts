import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { VideoStatsExtented } from 'src/app/youtube/models/search-item.model';
import SortFieldType from 'src/app/youtube/models/sort-field.model';
import { FilterVideoService } from 'src/app/youtube/services/filter-video.service';
import { SearchVideoService } from 'src/app/youtube/services/search-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() public sortType!: SortFieldType;

  @Input() public orderType!: number;

  public readonly videos$: Observable<VideoStatsExtented[]> = this.searchVideoService.videos$;

  public readonly filterWord$: Observable<string> = this.filterVideoService.filterWord$;

  constructor(
    private searchVideoService: SearchVideoService,
    public filterVideoService: FilterVideoService,
  ) {}

  videoById(_index: number, video: VideoStatsExtented): string {
    return video.id.videoId;
  }
}
