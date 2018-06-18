import { CreateUserCompanyDTO } from './../dto/create-user-company-dto';
import { CreateOnlyUserDTO } from './../dto/create-only-user-dto';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.company.url, http);
  }

  /**
   * //TODO ainda tem q ver como vai fazer isso no backend
   * @url http://localhost:8080/auth/user
   */
  //cria tudo em uma funcao so, ou divide em duas?
  registerOnlyUser(user: CreateOnlyUserDTO): Observable<CreateOnlyUserDTO> {
    //console.log("Registro de usuario apenas:"+user);
    return this.http.post(environment.urls.user.url, user).pipe(
      map(res => <CreateOnlyUserDTO>res),
      catchError(this.handleError)
    );
  }

  registerUserCompany(user: CreateUserCompanyDTO): Observable<CreateUserCompanyDTO> {
    //console.log("Registro de usuario e empresa:"+user);
    return this.http.post(environment.urls.user.url, user).pipe(
      map(res => <CreateUserCompanyDTO>res),
      catchError(this.handleError)
    );
  }

}
