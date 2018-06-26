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
  codesList: Array<any> = [];

  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.codesList = this.refreshListCodes();
    console.log(this.codesList);
  }

  refreshListCodes() {
    let list1 = {};
    let list2 = {};
    let obj = [];
    this.companyService.getAll<CodeDTO>().subscribe(
      results => {
        let dto: CodeDTO = results;
        list1['type'] = 'Administrador';
        list1['code'] = dto['companyAdminCode'];
        list2['type'] = 'Funcionario';
        list2['code'] = dto['companyUserCode'];
        obj.push(list1);
        obj.push(list2);
        this.companyCodes = dto;
      }
    );
    return obj;
  }
}
