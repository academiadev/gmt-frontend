
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';
import { CodeDTO } from '../dto/code-dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.user.company, http);
  }

  getCodes() {
    return this.http.post(environment.urls.company.url, this.getHeaders());
  }
  
}
