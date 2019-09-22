import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {
  readonly apiBaseUrl = 'https://api.kaustubhk.com/';

  constructor(private http: HttpClient) {
  }



  private handleError(error: HttpErrorResponse) {
    // https://angular.io/guide/http#getting-error-details
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
      console.log(error);
      return throwError('Please check your connection');
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      console.error(error);
      return throwError('There was a problem completing your request');
    }
  }

  postRequest(resource: string, data: object) {
    const body: string = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json'
      })
    };
    return this.http.post(this.apiBaseUrl + resource, body, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
