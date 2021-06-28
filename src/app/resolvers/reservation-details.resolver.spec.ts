import { TestBed } from '@angular/core/testing';

import { ReservationDetailsResolver } from './reservation-details.resolver';

describe('ReservationDetailsResolver', () => {
  let resolver: ReservationDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ReservationDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
