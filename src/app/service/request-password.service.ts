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
export class RequestPasswordService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.requestPassword.url, http);
  }

  //Mudar a rota nos environments 
  requestPassword(email: String): Observable<boolean> {
    return this.http.post(environment.urls.requestPassword.url, email).pipe(
      map(res => <true>res),
      catchError(this.handleError)
    );
  }

}
