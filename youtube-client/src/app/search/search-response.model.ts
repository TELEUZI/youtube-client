import Item, { Kind } from './search-item.model';

export interface SearchResponse {
  kind: Kind;
  etag: string;
  pageInfo: PageInfo;
  items: Item[];
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
