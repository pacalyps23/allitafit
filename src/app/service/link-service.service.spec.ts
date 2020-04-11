import { TestBed } from '@angular/core/testing';

import { LinkServiceService } from './link-service.service';

describe('LinkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkServiceService = TestBed.get(LinkServiceService);
    expect(service).toBeTruthy();
  });
});
