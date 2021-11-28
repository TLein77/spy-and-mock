import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ThingService } from './thing.service';

describe('ThingService', () => {
  let service: ThingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ThingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
