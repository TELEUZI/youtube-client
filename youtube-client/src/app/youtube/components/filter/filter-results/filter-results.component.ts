import { Component, EventEmitter, Output } from '@angular/core';
import SortFieldType from 'src/app/youtube/models/sort-field.model';
import { FilterVideoService } from 'src/app/youtube/services/filter-video.service';

@Component({
  selector: 'app-filter-results',
  templateUrl: './filter-results.component.html',
  styleUrls: ['./filter-results.component.scss'],
})
export class FilterResultsComponent {
  @Output() sort = new EventEmitter<SortFieldType>();

  constructor(public filterVideoService: FilterVideoService) {}

  filterWord = '';

  sortByCount() {
    this.sort.emit(SortFieldType.VIEWS);
  }

  sortByDate() {
    this.sort.emit(SortFieldType.DATE);
  }

  setFilter(value: string) {
    this.filterVideoService.setFilterWord(value);
  }
}
