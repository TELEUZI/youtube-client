import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Video from '../../models/search-item.model';
import { SearchVideoService } from '../../services/search-service.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  video: Video = {} as Video;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchVideoService: SearchVideoService,
  ) {}

  ngOnInit(): void {
    // this.route.snapshot.params.id;

    // this.route.queryParams.subscribe(v => {
    //   v.
    // })
    // console.log(this.route.outlet);
    // console.log(this.route);
    // this.route.url.subscribe((url) => {
    //   console.log(url);
    // });
    // this.route.params.subscribe((params) => {
    //   console.log(params.id);
    // });
    //  this.searchString$.pipe(
    //   switchMap((searchString) => this.videoApiService.getVideos(searchString)),
    // );
    // pipe(
    //   // switchMap(() => this.route.params),
    //   filter((v) => v.filter(v => v.id === this.route.params.)),
    // );
    this.searchVideoService.videos$.subscribe((v) => {
      this.route.params.subscribe((params) => {
        console.log(params);
        this.video = v.find((vid) => vid.id === params.name) || ({} as Video);
      });
    });
  }
}
