import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedInPostComponent } from './logged-in-post.component';

describe('LoggedInPostComponent', () => {
  let component: LoggedInPostComponent;
  let fixture: ComponentFixture<LoggedInPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedInPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedInPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
