import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterVideoService {
  public get isFilterShow$() {
    return this.showFilters$$.pipe();
  }

  public get filterWord$() {
    return this.filterWordSourse$$.pipe();
  }

  private readonly showFilters$$ = new BehaviorSubject<boolean>(false);

  private readonly filterWordSourse$$: Subject<string> = new Subject<string>();

  toggleFilters() {
    this.showFilters$$.next(!this.showFilters$$.value);
  }

  setFilterWord(word: string) {
    this.filterWordSourse$$.next(word);
  }
}
