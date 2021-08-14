import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Video from '../../models/search-item.model';
import { SearchVideoService } from '../../services/search-service.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  video: Video = {} as Video;

  constructor(private route: ActivatedRoute, private searchVideoService: SearchVideoService) {}

  ngOnInit(): void {
    this.searchVideoService.videos$.subscribe((v) => {
      this.route.params.subscribe((params) => {
        this.video = v.find((vid) => vid.id === params.name) || ({} as Video);
      });
    });
  }
}
