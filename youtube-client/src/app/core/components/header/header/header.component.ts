import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { searchVideos } from 'src/app/redux/actions/youtube.actions';
import { selectUrl } from 'src/app/redux/selectors/router.selector';
import { FilterVideoService } from 'src/app/youtube/services/filter-video.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public value: string = '';

  public isSearching = false;

  public readonly userName$: Observable<string>;

  public readonly searchString$: BehaviorSubject<string> = new BehaviorSubject<string>(this.value);

  public readonly isLoggedIn$: Observable<boolean>;

  public readonly url: Observable<string>;

  constructor(
    private filterVideoService: FilterVideoService,
    private authService: AuthService,
    private store: Store,
  ) {
    this.userName$ = this.authService.userName$;
    this.isLoggedIn$ = this.authService.isAuthenticated$;
    this.searchString$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((searchString) => searchString.length >= 3),
      tap((videoName) => {
        this.store.dispatch(searchVideos({ payload: { videoName } }));
      }),
    );
    this.url = this.store.select(selectUrl);
  }

  logOut() {
    this.authService.logOut();
  }

  getResult(videoName: string) {
    this.searchString$.next(videoName);
  }

  toggleFiltersButton() {
    this.isSearching = true;
  }

  resetQueryString() {
    this.value = '';
  }

  toggleFilters() {
    this.filterVideoService.toggleFilters();
  }
}
