import { Component } from '@angular/core';
import { FilterVideoService } from 'src/app/youtube/services/filter-video.service';
import { SearchVideoService } from 'src/app/youtube/services/search-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  value: string = '';

  isSearching = false;

  constructor(
    private searchVideoService: SearchVideoService,
    private filterVideoService: FilterVideoService,
  ) {}

  getResult(value: string) {
    this.toggleFiltersButton();
    this.searchVideoService.searchVideos(value);
  }

  toggleFiltersButton() {
    this.isSearching = !this.isSearching;
  }

  toggleFilters() {
    this.filterVideoService.toggleFilters();
  }
}
