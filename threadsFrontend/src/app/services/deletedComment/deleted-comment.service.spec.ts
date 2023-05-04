import { TestBed } from '@angular/core/testing';

import { DeletedCommentService } from './deleted-comment.service';

describe('DeletedCommentService', () => {
  let service: DeletedCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletedCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
