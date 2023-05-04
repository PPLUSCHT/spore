import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotLoggedInPostComponent } from './not-logged-in-post.component';

describe('NotLoggedInPostComponent', () => {
  let component: NotLoggedInPostComponent;
  let fixture: ComponentFixture<NotLoggedInPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotLoggedInPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotLoggedInPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
