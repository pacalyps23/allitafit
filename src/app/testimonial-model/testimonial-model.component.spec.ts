import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialModelComponent } from './testimonial-model.component';

describe('TestimonialModelComponent', () => {
  let component: TestimonialModelComponent;
  let fixture: ComponentFixture<TestimonialModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
