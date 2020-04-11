import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTrainingComponent } from './live-training.component';

describe('LiveTrainingComponent', () => {
  let component: LiveTrainingComponent;
  let fixture: ComponentFixture<LiveTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
