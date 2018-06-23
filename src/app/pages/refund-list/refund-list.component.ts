import { CreateRefundComponent } from './../../components/refund-modal/create/create-modal.component';
import { ViewRefundComponent } from './../../components/refund-modal/view/view-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundDTO } from './../../dto/refund-dto';
import { environment } from './../../../environments/environment';
import { TokenDTO } from './../../dto/token-dto';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { LoginDTO } from './../../dto/login-dto';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RefundModalComponent } from '../../components/refund-modal/refund-modal.component';


@Component({
  selector: 'refund-list',
  templateUrl: './refund-list.component.html',
  styleUrls: ['./refund-list.component.scss'],
})

export class RefundListComponent implements OnInit {
  form: FormGroup;
  refundList: Array<RefundDTO> = [];
  tmpDTO: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toaster: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.tmpDTO = new RefundDTO('Passeio', 50.49, 'Avaliação', 'Alimentação');
    this.refundList.push(new RefundDTO('Passeio', 50.49, 'Avaliação', 'Alimentação'))
    this.refundList.push(new RefundDTO('Passeio', 50.49, 'Avaliação', 'Alimentação'))
    this.refundList.push(new RefundDTO('Passeio', 50.49, 'Avaliação', 'Alimentação'))
    this.refundList.push(new RefundDTO('Passeio', 50.49, 'Avaliação', 'Alimentação'))
  }

  ToggleCheckboxes(){
    
  }

  openModal() {
    let refundModal = this.modalService.open(CreateRefundComponent, { size: 'lg', backdrop: 'static'} );
    refundModal.componentInstance.data = this.tmpDTO;
  }

}
