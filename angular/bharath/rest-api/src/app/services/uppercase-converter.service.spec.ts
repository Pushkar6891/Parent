import { TestBed } from '@angular/core/testing';

import { UppercaseConverterService } from './uppercase-converter.service';

describe('UppercaseConverterService', () => {
  let service: UppercaseConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UppercaseConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
