import { TestBed } from '@angular/core/testing';

import { PostDataStorageService } from './post-data-storage.service';

describe('PostDataStorageService', () => {
  let service: PostDataStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDataStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
