import { TestBed } from '@angular/core/testing';

import { EzoomApiService } from './ezoom-api.service';

describe('EzoomApiService', () => {
  let service: EzoomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzoomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
