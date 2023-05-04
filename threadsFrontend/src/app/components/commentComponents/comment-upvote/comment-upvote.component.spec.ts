import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentUpvoteComponent } from './comment-upvote.component';

describe('CommentUpvoteComponent', () => {
  let component: CommentUpvoteComponent;
  let fixture: ComponentFixture<CommentUpvoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentUpvoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentUpvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
