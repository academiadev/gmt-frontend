import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { UserDTO } from '../dto/user-dto';
import { TokenDTO } from '../dto/token-dto';
import { ChangePasswordDTO } from '../dto/change-password-dto';


@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.user.user, http);
  }

  /**
  * @url http://localhost:8080/auth/user
  */

  registerUser(user: UserDTO): Observable<Response> {
    //console.log("Registro de usuario apenas:"+user);
    return this.http.post(environment.urls.user.user, user).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  registerUserCompany(user: UserDTO): Observable<Response> {
    return this.http.post(environment.urls.user.company, user).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  requestPassword(email: String): Observable<Response> {
    return this.http.post(environment.urls.password.request, email).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }

  changePassword(passwords: ChangePasswordDTO): Observable<Response> {
    return this.http.post(environment.urls.password.change, passwords).pipe(
      map(res => <Response>res),
      catchError(this.handleError)
    );
  }
}