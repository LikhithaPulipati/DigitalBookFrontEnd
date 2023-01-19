import { TestBed } from '@angular/core/testing';

import { SubscribedbookService } from './subscribedbook.service';

describe('ReadService', () => {
  let service: SubscribedbookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribedbookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
