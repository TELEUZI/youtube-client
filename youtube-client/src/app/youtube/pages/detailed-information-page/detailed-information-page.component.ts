import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { selectVideo } from 'src/app/redux/selectors/videos.selector';
import { VideoStatsExtented } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnDestroy {
  destroy$: Subject<void> = new Subject();

  public video$: Observable<VideoStatsExtented> = this.route.params.pipe(
    switchMap((params: Params) => {
      return this.store.select(selectVideo(params.name));
    }),
    takeUntil(this.destroy$),
  );

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
