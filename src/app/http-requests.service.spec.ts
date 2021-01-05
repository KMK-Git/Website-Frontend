/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpRequestsService } from './http-requests.service';

describe('Service: HttpRequests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpRequestsService]
    });
  });

  it('should ...', inject([HttpRequestsService], (service: HttpRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
