import { TestBed } from '@angular/core/testing';

import { RouteGaurdServiceService } from './route-gaurd-service.service';

describe('RouteGaurdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGaurdServiceService = TestBed.get(RouteGaurdServiceService);
    expect(service).toBeTruthy();
  });
});
