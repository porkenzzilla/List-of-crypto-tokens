import { TestBed } from '@angular/core/testing';

import { EthplorerService } from './ethplorer.service';

describe('EthplorerService', () => {
  let service: EthplorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EthplorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
