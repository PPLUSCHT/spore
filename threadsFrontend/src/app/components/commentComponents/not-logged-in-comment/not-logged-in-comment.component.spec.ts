import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedInCommentComponent } from './not-logged-in-comment.component';

describe('NotLoggedInCommentComponent', () => {
  let component: NotLoggedInCommentComponent;
  let fixture: ComponentFixture<NotLoggedInCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotLoggedInCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotLoggedInCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
