import { TestBed } from '@angular/core/testing';

import { CancelGuardGuard } from './cancel-guard.guard';

describe('CancelGuardGuard', () => {
  let guard: CancelGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CancelGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
