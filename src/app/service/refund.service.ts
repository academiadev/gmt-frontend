import { RefundDTO } from './../dto/refund-dto';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RefundService extends DataService {

  constructor(http: HttpClient) {
    super(environment.urls.refund.url, http);
  }

  changeStatus(status: String, refunds: Array<RefundDTO>) {
    let refundIds = refunds.map(r => r.id);
    let requestData = { status: status, refunds: refundIds };
    return this.http.post(environment.urls.refund.status.url, requestData, this.getHeaders()).pipe(
      map(res => res),
      catchError(this.handleError)
    );
  }
  
}
