import { Component, OnInit } from '@angular/core';
import Video from 'src/app/youtube/models/search-item.model';
import { SearchVideoService } from 'src/app/youtube/services/search-service.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  videos: Video[] = [];

  constructor(private searchVideoService: SearchVideoService) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.searchVideoService.getVideos().subscribe((videos) => {
      this.videos = videos;
    });
  }

  clear() {
    this.videos = [];
  }
}
