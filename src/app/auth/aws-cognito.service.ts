import { Injectable } from '@angular/core';
import Auth from '@aws-amplify/auth';
import { from, Observable } from 'rxjs';
import { CognitoAccessToken, CognitoUserSession } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class AwsCognitoService {

  constructor() {
    Auth.configure({
      Auth: {
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_bnS6Vrync',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '4jvi174tlmrkifbs7jammau565',

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        // cookieStorage: {
        //   // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        //   domain: '.kaustubhk.com',
        //   // OPTIONAL - Cookie path
        //   path: '/',
        //   // OPTIONAL - Cookie expiration in days
        //   expires: 365,
        //   // OPTIONAL - Cookie secure flag
        //   // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        //   secure: true
        // }
      }
    });
  }


  async SignIn(username: string, password: string) {
    try {
      const user = await Auth.signIn(username, password);
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        const loggedUser = await Auth.completeNewPassword(
          user,              // the Cognito User Object
          password,       // the new password
          // OPTIONAL, the required attributes
          {
          }
        );
      }
    } catch (err) {
      console.log(err);
      if (err.code === 'UserNotConfirmedException') {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
        throw new Error('User not confirmed');
      } else if (err.code === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
        throw new Error('Password reset required');
      } else if (err.code === 'NotAuthorizedException') {
        // The error happens when the incorrect password is provided
        throw new Error('Invalid username/password');
      } else if (err.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
        throw new Error('Invalid username/password');
      } else {
        throw err;
      }
    }
  }

  SignOut() {
    Auth.signOut({ global: true })
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  private getCurrentAuthenticatedUser(): Observable<any> {
    return from(Auth.currentAuthenticatedUser({
      bypassCache: false
    }));
  }

  getCurrentSession(): Promise<CognitoUserSession> {
    return Auth.currentSession();
  }

  async getIdToken(): Promise<string> {
    const session = await this.getCurrentSession();
    return session.getIdToken().getJwtToken();
  }

  isUserAuthenticated() {
    return new Observable<boolean>((observer) => {
      this.getCurrentAuthenticatedUser().subscribe({
        next: () => observer.next(true),
        error: () => observer.next(false),
        complete: () => observer.complete(),
      });
    });
  }
}
