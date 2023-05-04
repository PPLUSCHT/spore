import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractTextBoxComponent } from './abstract-text-box.component';

describe('AbstractTextBoxComponent', () => {
  let component: AbstractTextBoxComponent;
  let fixture: ComponentFixture<AbstractTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbstractTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
