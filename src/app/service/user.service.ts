import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { UserDTO } from '../dto/user-dto';
import { ValidationErrors } from '@angular/forms';
import { ChangePassworDTO } from '../dto/change-passwor-dto';


@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.user.url, http);
  }

  /**
  * @url http://localhost:8080/auth/user
  */

  registerUser(user: UserDTO): Observable<Response> {
    console.log(user);
    return this.http.post(environment.urls.user.url, user).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  registerUserCompany(user: UserDTO): Observable<Response> {
    console.log(user);
    return this.http.post(environment.urls.user.newCompany, user).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  requestPassword(email: String): Observable<Response> {
    console.log(email);
    return this.http.post(environment.urls.password.request, email).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }
 
  newPassword(email: String): Observable<Response> {
    console.log(email);
    return this.http.post(environment.urls.password.new, email).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  changePassword(passwords: ChangePassworDTO): Observable<Response> {
    console.log(passwords);
    return this.http.post(environment.urls.auth.changePassword, passwords).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  requestEmail(email: string): Observable<Response> {
    return this.http.post(environment.urls.user.email, email).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

}