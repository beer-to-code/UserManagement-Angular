import { TestBed } from '@angular/core/testing';

import { PostFetchService } from './post-fetch.service';

describe('PostFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostFetchService = TestBed.get(PostFetchService);
    expect(service).toBeTruthy();
  });
});
