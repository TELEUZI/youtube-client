import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FilterVideoService } from 'src/app/youtube/services/filter-video.service';
import { SearchVideoService } from 'src/app/youtube/services/search-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  value: string = '';

  isSearching = false;

  userName$!: Observable<string>;

  isLoggedIn$!: Observable<boolean>;

  url?: string;

  constructor(
    private searchVideoService: SearchVideoService,
    private filterVideoService: FilterVideoService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.userName$ = this.authService.userName$;
    this.isLoggedIn$ = this.authService.isAuthenticated$;
    this.router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof NavigationEnd))
      .subscribe(() => {
        this.url = this.router.url;
      });
  }

  get isMain() {
    return this.url === '/';
  }

  logOut() {
    this.authService.logOut();
  }

  getResult(value: string) {
    this.toggleFiltersButton();
    this.searchVideoService.searchVideos(value);
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
