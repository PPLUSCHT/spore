import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractPostBodyComponent } from './abstract-post-body.component';

describe('AbstractPostBodyComponent', () => {
  let component: AbstractPostBodyComponent;
  let fixture: ComponentFixture<AbstractPostBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractPostBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractPostBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
