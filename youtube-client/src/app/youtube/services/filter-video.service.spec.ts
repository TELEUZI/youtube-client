import { TestBed } from '@angular/core/testing';
import { FilterVideoService } from './filter-video.service';

describe('FilterVideoService', () => {
  let service: FilterVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
