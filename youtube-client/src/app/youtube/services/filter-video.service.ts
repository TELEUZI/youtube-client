import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterVideoService {
  private showFilters$ = new BehaviorSubject<boolean>(false);

  private readonly filterWordSourse$$: Subject<string> = new Subject<string>();

  public readonly filterWord$ = this.filterWordSourse$$.pipe();

  getFilterChange(): Subject<boolean> {
    return this.showFilters$;
  }

  toggleFilters() {
    this.showFilters$.next(!this.showFilters$.value);
  }

  setFilterWord(word: string) {
    this.filterWordSourse$$.next(word);
  }
}
