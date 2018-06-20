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
    super(environment.urls.user.url, http);
  }

  /**
* //TODO ainda tem q ver como vai fazer isso no backend
* @url http://localhost:8080/auth/user
*/
  //colocar pra receber a resposta do servidor, pois ele n retorna um dto
  registerUser(user: UserDTO): Observable<UserDTO> {
    //console.log("Registro de usuario apenas:"+user);
    return this.http.post(environment.urls.user.url, user).pipe(
      map(res => <UserDTO>res),
      catchError(this.handleError)
    );
  }

  //tem q devolver um token pra cadastrar o usuario como admin
  registerCompany(name: string): Observable<TokenDTO> {
    return this.http.post(environment.urls.company.url, name).pipe(
      map(res => <TokenDTO>res),
      catchError(this.handleError)
    );
  }

  //Mudar a rota nos environments 
  requestPassword(email: String): Observable<boolean> {
    return this.http.post(environment.urls.requestPassword.url, email).pipe(
      map(res => <boolean>res),
      catchError(this.handleError)
    );
  }

  changePassword(passwords: ChangePasswordDTO): Observable<boolean> {
    return this.http.post(environment.urls.changePassword.url, passwords).pipe(
      map(res => <boolean>res),
      catchError(this.handleError)
    );
  }




}