import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterVideoService {
  private readonly showFilters$$ = new BehaviorSubject<boolean>(false);

  private readonly filterWordSourse$$: Subject<string> = new Subject<string>();

  public readonly filterWord$ = this.filterWordSourse$$.pipe();

  public readonly isFilterShow$ = this.showFilters$$.pipe();

  toggleFilters() {
    this.showFilters$$.next(!this.showFilters$$.value);
  }

  setFilterWord(word: string) {
    this.filterWordSourse$$.next(word);
  }
}
