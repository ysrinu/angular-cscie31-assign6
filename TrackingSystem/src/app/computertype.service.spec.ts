import { TestBed } from '@angular/core/testing';

import { ComputertypeService } from './computertype.service';

describe('ComputertypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComputertypeService = TestBed.get(ComputertypeService);
    expect(service).toBeTruthy();
  });
});
