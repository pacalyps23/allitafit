import { TestBed } from '@angular/core/testing';

import { CalorieService } from './calorie.service';

describe('CalorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalorieService = TestBed.get(CalorieService);
    expect(service).toBeTruthy();
  });
});
