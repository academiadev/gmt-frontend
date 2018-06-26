import { Component, OnInit } from '@angular/core';
import { CodeDTO } from '../../dto/code-dto';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyCodes: CodeDTO;
  codesList: Array<Array<any>> = [];
  tmpDTO: any;

  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.refreshListCodes();
    // this.companyService.getCodes();
    // getCodes() {
    //   let obj = [];
    //   this.http.get(environment.urls.company.url, this.getHeaders()).subscribe( (res:CodeDTO) => {
    //     obj.push(new CodeDTO( res['companyAdminCode'], res['companyUserCode'], res['name'] ));
    //     console.log(obj);
    //     return obj;
    //   });
    // }
  }

  refreshListCodes(){
    this.companyService.getAll<CodeDTO>().subscribe(
      results => { 
        let dto: CodeDTO = results; 
        this.companyCodes = dto;
      }
    );
  }
}
