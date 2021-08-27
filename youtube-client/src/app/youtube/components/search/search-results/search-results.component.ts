import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCard } from 'src/app/redux/selectors/custom-cars.selector';
import { AppState, CustomCard } from 'src/app/redux/state.models';
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

  public readonly cards$: Observable<CustomCard[]> = this.store.select<CustomCard[]>(selectCard);
  // .pipe(map((state) => state[customCardsNodeName][customCardsNodeName]));

  constructor(
    private searchVideoService: SearchVideoService,
    public filterVideoService: FilterVideoService,
    // eslint-disable-next-line ngrx/no-typed-global-store
    private store: Store<AppState>,
  ) {}
}
