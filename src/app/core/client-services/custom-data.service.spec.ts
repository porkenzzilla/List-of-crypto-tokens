import { TestBed } from '@angular/core/testing';

import { CustomDataService } from './custom-data.service';

describe('ImageService', () => {
  let service: CustomDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
