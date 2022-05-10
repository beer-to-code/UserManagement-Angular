import { TestBed } from '@angular/core/testing';

import { ContactrequestService } from './contactrequest.service';

describe('ContactrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactrequestService = TestBed.get(ContactrequestService);
    expect(service).toBeTruthy();
  });
});
