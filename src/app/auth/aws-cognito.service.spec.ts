/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { AwsCognitoService } from './aws-cognito.service';

describe('Service: AwsCognito', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwsCognitoService]
    });
  });

  it('should ...', inject([AwsCognitoService], (service: AwsCognitoService) => {
    expect(service).toBeTruthy();
  }));
});
