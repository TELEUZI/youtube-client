import { Component, Input, OnInit } from '@angular/core';
import Video from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input()
  video!: Video;

  constructor() {}

  ngOnInit(): void {}
}
// {kind = '',
//     etag = '',
//     id = '',
//     snippet = undefined,
//     statistics: Statistics;}
