import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbacksentComponent } from './feedbacksent.component';

describe('FeedbacksentComponent', () => {
  let component: FeedbacksentComponent;
  let fixture: ComponentFixture<FeedbacksentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbacksentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbacksentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
