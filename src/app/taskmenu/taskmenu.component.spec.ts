import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmenuComponent } from './taskmenu.component';

describe('TaskmenuComponent', () => {
  let component: TaskmenuComponent;
  let fixture: ComponentFixture<TaskmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
