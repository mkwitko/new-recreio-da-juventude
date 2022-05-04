import { TestBed } from '@angular/core/testing';

import { MasterReqService } from './master-req.service';

describe('MasterReqService', () => {
  let service: MasterReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
