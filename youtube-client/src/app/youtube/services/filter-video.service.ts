import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterVideoService {
  public showFilters = false;

  private readonly filterWordSourse$$: Subject<string> = new Subject<string>();

  public readonly filterWord$ = this.filterWordSourse$$.pipe();

  isShowFilters(): boolean {
    return this.showFilters;
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }

  setFilterWord(word: string) {
    this.filterWordSourse$$.next(word);
  }
}
