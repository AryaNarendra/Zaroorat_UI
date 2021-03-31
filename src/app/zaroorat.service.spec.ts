import { TestBed, inject } from '@angular/core/testing';

import { ZarooratService } from './zaroorat.service';

describe('ZarooratService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZarooratService]
    });
  });

  it('should be created', inject([ZarooratService], (service: ZarooratService) => {
    expect(service).toBeTruthy();
  }));
});
