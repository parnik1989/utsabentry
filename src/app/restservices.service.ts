import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { MemberList } from './member.dto';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  // Base url
  baseurl = 'https://utsab-7e5d.restdb.io/rest/members';

  constructor(private http: HttpClient) { }


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // POST
  getDetails(searchString: any): Observable<MemberList> {
    const httpHeader = new HttpHeaders().set('x-apikey', '5f688ca15313511c55fc98c4');
    return this.http.get<MemberList>(this.baseurl + '?q={"Mobile":' + searchString + '}', {headers: httpHeader})
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}

