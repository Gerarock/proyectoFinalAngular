import { TestBed } from '@angular/core/testing';

import { AlumnService } from './alumn.service';

describe('AlumnService', () => {
  let service: AlumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
