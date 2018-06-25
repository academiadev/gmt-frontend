import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, catchError } from 'rxjs/operators';
import { DataService } from './data.service';
import { TokenDTO } from './../dto/token-dto';
import { LoginDTO } from './../dto/login-dto';
import { IsAuthDTO } from './../dto/is-auth-dto';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends DataService {

  static readonly ROLE_ADMIN = "ROLE_ADMIN";
  static readonly ROLE_USER = "ROLE_COMMONUSER";

  constructor(
    http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    super(environment.urls.auth.url, http);
  }

  /**
   *
   * @url http://localhost:8080/auth/login
   */
  login(login: LoginDTO): Observable<TokenDTO> {
    return this.http.post(environment.urls.auth.login, login).pipe(
      map(res => <TokenDTO>res),
      catchError(this.handleError)
    );
  }

  logout() {
    localStorage.removeItem(environment.tokenName);
  }

  logoutAndRedirect() {
    this.logout();
    this.router.navigate(['/']);
  }

  refresh(): Observable<IsAuthDTO> {
    return this.http.post(environment.urls.auth.refresh, {}, this.getHeaders()).pipe(
      map(res => <IsAuthDTO>res)
    );
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(environment.tokenName);

    if (token == null) {
      return false;
    }

    const isExpired = this.jwtHelper.isTokenExpired(token);
    return !isExpired;
  }

  isExpired(): boolean {
    const token = localStorage.getItem(environment.tokenName);
    return this.jwtHelper.isTokenExpired(token);
  }

  toObject<T>(obj: any): T {
    return <T>obj;
  }

  getRole(){
    const token = localStorage.getItem(environment.tokenName);

    if (!token) {
      return null;
    }

    return this.jwtHelper.decodeToken(token);
  }

  isAdmin(){
    if(this.getRole == null){
      return false;
    }

    return this.getRole()['role'] == AuthService.ROLE_ADMIN;
  }

  getCompany(){
    const token = localStorage.getItem(environment.tokenName);
    return this.jwtHelper.decodeToken(token)['companyName'];
  }

}
