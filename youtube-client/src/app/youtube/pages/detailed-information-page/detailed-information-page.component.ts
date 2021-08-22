import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import Video from '../../models/search-item.model';
import { SearchVideoService } from '../../services/search-service.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  public video?: Video;

  constructor(private route: ActivatedRoute, private searchVideoService: SearchVideoService) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.searchVideoService.videos$.pipe(
            map((videos: Video[]) => videos.find((video) => video.id === params.name)),
          );
        }),
      )
      .subscribe((video: Video | undefined) => {
        this.video = video;
      });
  }
}
