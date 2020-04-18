import { TestBed } from '@angular/core/testing';

import { AuthGuardUser } from './auth-guard-user.service';

describe('AuthGuardUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardUser = TestBed.get(AuthGuardUser);
    expect(service).toBeTruthy();
  });
});
