import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { searchVideos } from 'src/app/redux/actions/youtube.actions';
import { selectUrl } from 'src/app/redux/selectors/router.selector';
import { FilterVideoService } from 'src/app/youtube/services/filter-video.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public value: string = '';

  public isSearching = false;

  public userName$!: Observable<string>;

  public isLoggedIn$!: Observable<boolean>;

  public url?: string;

  constructor(
    private filterVideoService: FilterVideoService,
    private router: Router,
    private authService: AuthService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.userName$ = this.authService.userName$;
    this.isLoggedIn$ = this.authService.isAuthenticated$;
    this.store.select(selectUrl).subscribe((name) => {
      console.log(name);
      this.url = name;
    });
    // this.router.events
    //   .pipe(filter((e: Event): e is RouterEvent => e instanceof NavigationEnd))
    //   .subscribe(() => {
    //     this.url = this.router.url;
    //   });
  }

  get isMain() {
    return this.url === '/';
  }

  logOut() {
    this.authService.logOut();
  }

  getResult(videoName: string) {
    // this.searchVideoService.searchVideos(value);
    this.store.dispatch(searchVideos({ payload: { videoName } }));
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
