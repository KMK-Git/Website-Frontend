/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpRequestsService } from './http-requests.service';

describe('Service: HttpRequests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRequestsService]
    });
  });

  it('should ...', inject([HttpRequestsService], (service: HttpRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
