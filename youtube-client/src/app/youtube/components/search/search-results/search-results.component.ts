import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCard } from 'src/app/redux/selectors/custom-cars.selector';
import { selectVideos } from 'src/app/redux/selectors/videos.selector';
import { CustomCard } from 'src/app/redux/state.models';
import { VideoStatsExtented } from 'src/app/youtube/models/search-item.model';
import SortFieldType from 'src/app/youtube/models/sort-field.model';
import { FilterVideoService } from 'src/app/youtube/services/filter-video.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() public sortType!: SortFieldType;

  @Input() public orderType!: number;

  public readonly videos$: Observable<VideoStatsExtented[]>;

  public readonly filterWord$: Observable<string>;

  public readonly cards$: Observable<CustomCard[]>;

  constructor(
    public readonly filterVideoService: FilterVideoService,
    private readonly store: Store,
  ) {
    this.videos$ = this.store.select<VideoStatsExtented[]>(selectVideos);
    this.filterWord$ = this.filterVideoService.filterWord$;
    this.cards$ = this.store.select<CustomCard[]>(selectCard);
  }

  videoById(_index: number, video: VideoStatsExtented): string {
    return video.id;
  }
}
