import { AwsCognitoService } from './aws-cognito.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardService implements CanActivate {

  constructor(private cognitoService: AwsCognitoService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return new Observable<boolean | UrlTree>((observer) => {
      this.cognitoService.isUserAuthenticated().subscribe({
        next: val => {
          if (!val) {
            observer.next(this.router.parseUrl('/birthday/login'));
          }
          observer.next(true);
        },
        error: () => observer.next(this.router.parseUrl('/birthday/login')),
        complete: () => observer.complete(),
      });
    });
  }

}
