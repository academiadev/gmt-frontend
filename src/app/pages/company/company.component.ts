import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CodeDTO } from '../../dto/code-dto';
import { CompanyService } from '../../service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    let codelist  = this.companyService.getCodes().subscribe();

    // this.codesList.push(new CodeDTO('Administrador','JU484JOFAS8390022JD'))
    // this.codesList.push(new CodeDTO('Usuario','JU484JOFAS8390022JD'))
  }

}
