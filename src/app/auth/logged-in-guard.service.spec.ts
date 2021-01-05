/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggedInGuardService } from './logged-in-guard.service';

describe('Service: LoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoggedInGuardService]
    });
  });

  it('should ...', inject([LoggedInGuardService], (service: LoggedInGuardService) => {
    expect(service).toBeTruthy();
  }));
});
