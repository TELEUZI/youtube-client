import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { VideoStatsExtented } from '../../models/search-item.model';
import { SearchVideoService } from '../../services/search-service.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject();

  public video?: VideoStatsExtented;

  constructor(private route: ActivatedRoute, private searchVideoService: SearchVideoService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.searchVideoService.searchVideoById(params.name);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((video: VideoStatsExtented | undefined) => {
        this.video = video;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
