export interface VideoStatsExtented extends Omit<Video, 'id'> {
  contentDetails: {
    duration: string;
  };
  statistics: Statistics;
  id: string;
}
export interface Video {
  kind: string;
  etag: string;
  id: {
    videoId: string;
  };
  snippet: Snippet;
}
export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: Localized;
  defaultAudioLanguage: string;
  defaultLanguage?: string;
}

export interface Thumbnails {
  default: ThumbnailInfo;
  medium: ThumbnailInfo;
  high: ThumbnailInfo;
  standard: ThumbnailInfo;
  maxres: ThumbnailInfo;
}
export interface ThumbnailInfo {
  url: string;
  width: number;
  height: number;
}

export interface Localized {
  title: string;
  description: string;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export enum Kind {
  YoutubeVideo = 'youtube#video',
  YoutubeVideoList = 'youtube#videoListResponse',
}

export enum DefaultLanguage {
  En = 'en',
  EnUS = 'en-US',
  Ru = 'ru',
}
