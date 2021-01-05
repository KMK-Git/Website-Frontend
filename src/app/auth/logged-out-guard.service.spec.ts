/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggedOutGuardService } from './logged-out-guard.service';

describe('Service: LoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoggedOutGuardService]
    });
  });

  it('should ...', inject([LoggedOutGuardService], (service: LoggedOutGuardService) => {
    expect(service).toBeTruthy();
  }));
});
