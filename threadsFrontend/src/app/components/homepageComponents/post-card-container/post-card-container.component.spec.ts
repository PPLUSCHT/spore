import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardContainerComponent } from './post-card-container.component';

describe('PostCardContainerComponent', () => {
  let component: PostCardContainerComponent;
  let fixture: ComponentFixture<PostCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
