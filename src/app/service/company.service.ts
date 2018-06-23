
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.user.company, http);
  }

}
