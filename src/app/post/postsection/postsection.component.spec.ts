import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsectionComponent } from './postsection.component';

describe('PostsectionComponent', () => {
  let component: PostsectionComponent;
  let fixture: ComponentFixture<PostsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
