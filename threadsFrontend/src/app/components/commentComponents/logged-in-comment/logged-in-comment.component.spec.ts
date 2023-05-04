import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInCommentComponent } from './logged-in-comment.component';

describe('LoggedInCommentComponent', () => {
  let component: LoggedInCommentComponent;
  let fixture: ComponentFixture<LoggedInCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
