import { TestBed } from '@angular/core/testing';

import { SizeDetectionService } from './size-detection.service';

describe('SizeDetectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeDetectionService = TestBed.get(SizeDetectionService);
    expect(service).toBeTruthy();
  });
});
