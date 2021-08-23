import { Video, VideoStatsExtented } from './search-item.model';

export interface SearchVideoResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: VideoStatsExtented[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: PageInfo;
  items: Video[];
}
