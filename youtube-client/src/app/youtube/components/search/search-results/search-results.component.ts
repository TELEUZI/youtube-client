import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import Video from 'src/app/youtube/models/search-item.model';
import SortFieldType from 'src/app/youtube/models/sort-field.model';
import { FilterVideoService } from 'src/app/youtube/services/filter-video.service';
import { SearchVideoService } from 'src/app/youtube/services/search-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {
  @Input() sortType!: SortFieldType;

  @Input() orderType!: number;

  public readonly videos$: Observable<Video[]> = this.searchVideoService.videos$;

  public readonly filterWord$: Observable<string> = this.filterVideoService.filterWord$;

  constructor(
    public searchVideoService: SearchVideoService,
    public filterVideoService: FilterVideoService,
  ) {}
}
