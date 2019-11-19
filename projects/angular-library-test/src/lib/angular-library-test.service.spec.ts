import { TestBed } from '@angular/core/testing';

import { AngularLibraryTestService } from './angular-library-test.service';

describe('AngularLibraryTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularLibraryTestService = TestBed.get(AngularLibraryTestService);
    expect(service).toBeTruthy();
  });
});
