import Video, { Kind } from './search-item.model';

export interface SearchResponse {
  kind: Kind;
  etag: string;
  pageInfo: PageInfo;
  items: Video[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
