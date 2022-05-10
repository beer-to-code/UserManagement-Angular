import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomecontainerComponent } from './welcomecontainer.component';

describe('WelcomecontainerComponent', () => {
  let component: WelcomecontainerComponent;
  let fixture: ComponentFixture<WelcomecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
