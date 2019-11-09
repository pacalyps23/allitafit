import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFitnessComponent } from './my-fitness.component';

describe('MyFitnessComponent', () => {
  let component: MyFitnessComponent;
  let fixture: ComponentFixture<MyFitnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFitnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
