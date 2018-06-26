
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';
import { CodeDTO } from '../dto/code-dto';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.company.url, http);
  }

  getCodes() {
    let obj = [];
    this.http.get(environment.urls.company.url, this.getHeaders()).subscribe( (res:CodeDTO) => {
      obj.push(new CodeDTO( res['companyAdminCode'], res['companyUserCode'], res['name'] ));
      console.log(obj);
      return obj;
    });
  }

}
