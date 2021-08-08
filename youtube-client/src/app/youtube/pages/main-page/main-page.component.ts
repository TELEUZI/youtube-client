import { Component } from '@angular/core';
import SortFieldType from '../../models/sort-field.model';
import { FilterVideoService } from '../../services/filter-video.service';

function getNextOrderType(orderType: number) {
  return (orderType + 1) % 2;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  showFilters = this.filterVideoService.showFilters;

  sortType = SortFieldType.DATE;

  orderType = 0;

  constructor(public filterVideoService: FilterVideoService) {}

  updateSort(type: SortFieldType) {
    if (type === this.sortType) {
      this.orderType = getNextOrderType(this.orderType);
    } else {
      this.sortType = type;
    }
  }
}
