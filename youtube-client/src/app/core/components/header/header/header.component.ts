import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
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

  url?: string;

  constructor(
    private searchVideoService: SearchVideoService,
    private filterVideoService: FilterVideoService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    // this.router.url.value[0].path
    this.router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof NavigationEnd))
      .subscribe(() => {
        this.url = this.router.url;
      });
    // this.router.events
    //   .pipe(filter((e: Event_2): e is RouterEvent => e instanceof NavigationEnd))
    //   .subscribe((e: Event): e is RouterEvent => {
    //     if (event instanceof NavigationEnd) {
    //       this.url = this.router.url;
    //     }
    //   });
    // this.router.url.subscribe((url) => {
    //   this.url = url[0].path;
    //   console.log(this.url);
    // });
  }

  get isMain() {
    return this.url === '/';
  }

  getResult(value: string) {
    console.log(this.url);
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
