import { TestBed } from '@angular/core/testing';

import { IngredientsServicesService } from './ingredients-services.service';

describe('IngredientsServicesService', () => {
  let service: IngredientsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
