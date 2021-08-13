import { animate, style, transition, trigger } from '@angular/animations';
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
  animations: [
    trigger('toggle', [
      // state(':leave', style({ opacity: 1 })),
      // state(':enter', style({ opacity: 0 })),
      transition(':enter', [style({ opacity: 0 }), animate('100ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class MainPageComponent {
  sortType = SortFieldType.DATE;

  orderType = 0;

  constructor(private filterVideoService: FilterVideoService) {}

  get filterWord() {
    return this.filterVideoService.getFilterChange();
  }

  updateSort(type: SortFieldType) {
    if (type === this.sortType) {
      this.orderType = getNextOrderType(this.orderType);
    } else {
      this.sortType = type;
    }
  }

  setFilter(value: string) {
    this.filterVideoService.setFilterWord(value);
  }
}
