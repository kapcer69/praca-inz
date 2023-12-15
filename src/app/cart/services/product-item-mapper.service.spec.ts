import { TestBed } from '@angular/core/testing';

import { ProductItemMapperService } from './product-item-mapper.service';

describe('ProductItemMapperService', () => {
  let service: ProductItemMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductItemMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
