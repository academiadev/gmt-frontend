import { Component, OnInit } from '@angular/core';
import { CodeDTO } from '../../dto/code-dto';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  CompanyCods: CodeDTO;
  codesList: Array<CodeDTO> = [];
  tmpDTO: any;


  constructor(
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.CompanyCods = this.companyService.getCodes();
    console.log(this.codesList);
  }

}
