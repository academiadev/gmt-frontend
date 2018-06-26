import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { UserDTO } from '../dto/user-dto';
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
    return this.http.post(environment.urls.user.url, user).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  registerUserCompany(user: UserDTO): Observable<Response> {
    return this.http.post(environment.urls.user.newCompany, user).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  CheckEmail(emailString: string): any {
    const myEmail = { email: emailString };
    return this.http.post(environment.urls.user.email, myEmail).subscribe(
      (success) => { console.log(success); return success; },
      (error) => { console.log(error); return error }
    );
  }

  changePassword(passwords: ChangePassworDTO): Observable<Response> {
    console.log(passwords);
    return this.http.post(environment.urls.auth.changePassword, passwords, this.getHeaders()).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  forgetPassword(emailString: String): Observable<Response> {
    const myEmail = { email: emailString };
    return this.http.post(environment.urls.user.forgetPassword, myEmail).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  redefinePassword(password: String, get: string): Observable<Response> {
    const myPassword = { passwor: password };
    let requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set('Authorization', 'Bearer ' + get);
    const myGet = { headers: requestHeaders };
    return this.http.post(environment.urls.user.redefinePassword, myPassword, myGet).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

}
