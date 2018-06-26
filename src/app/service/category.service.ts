import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';
import { RefundDTO } from '../dto/refund-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.refund.category, http);
  }

  getAllFriendly(){
    let objs = [];
    this.getAll().subscribe(
      items => {
        let categories = items as Array<String>;
        for(let category of categories){
          objs.push({name: category, friendlyName: RefundDTO.friendlyCategory(category)});
        }
      }
    );
    return objs;
  }
  
}
