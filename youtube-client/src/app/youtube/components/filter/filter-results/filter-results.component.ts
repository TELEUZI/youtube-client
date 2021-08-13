import { Component, EventEmitter, Output } from '@angular/core';
import SortFieldType from 'src/app/youtube/models/sort-field.model';

@Component({
  selector: 'app-filter-results',
  templateUrl: './filter-results.component.html',
  styleUrls: ['./filter-results.component.scss'],
})
export class FilterResultsComponent {
  @Output() sort = new EventEmitter<SortFieldType>();

  @Output() filter = new EventEmitter<string>();

  sortByCount() {
    this.sort.emit(SortFieldType.VIEWS);
  }

  sortByDate() {
    this.sort.emit(SortFieldType.DATE);
  }

  setFilter(value: string) {
    this.filter.emit(value);
  }
}
