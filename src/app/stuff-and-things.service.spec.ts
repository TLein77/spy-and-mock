import { TestBed } from '@angular/core/testing';

import { StuffAndThingsService } from './stuff-and-things.service';

describe('StuffAndThingsService', () => {
  let service: StuffAndThingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StuffAndThingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
