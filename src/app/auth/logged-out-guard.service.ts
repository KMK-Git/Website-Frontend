import { AwsCognitoService } from './aws-cognito.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedOutGuardService implements CanActivate {

  constructor(private cognitoService: AwsCognitoService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.cognitoService.isUserNotAuthenticated();
  }

}
