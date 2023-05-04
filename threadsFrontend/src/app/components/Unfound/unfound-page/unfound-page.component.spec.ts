import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfoundPageComponent } from './unfound-page.component';

describe('UnfoundPageComponent', () => {
  let component: UnfoundPageComponent;
  let fixture: ComponentFixture<UnfoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfoundPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnfoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
