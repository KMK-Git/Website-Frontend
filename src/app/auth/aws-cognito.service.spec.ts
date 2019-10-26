/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
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
