import { TestBed } from '@angular/core/testing';

import { NbSetupService } from './nb-setup.service';

describe('NbSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbSetupService = TestBed.get(NbSetupService);
    expect(service).toBeTruthy();
  });
});
