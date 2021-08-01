import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Video from 'src/app/youtube/models/search-item.model';
import { SearchVideoService } from 'src/app/youtube/services/search-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videos: Video[] = [];

  constructor(private searchVideoService: SearchVideoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.searchVideoService.getVideos().subscribe((videos) => {
      this.videos = videos;
    });
  }

  clear() {
    this.videos = [];
  }
}
