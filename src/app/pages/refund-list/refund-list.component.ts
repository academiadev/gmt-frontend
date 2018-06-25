import { catchError } from 'rxjs/operators';
import { ViewRefundComponent } from './../../components/refund-modal/view/view-modal.component';
import { CreateRefundComponent } from './../../components/refund-modal/create/create-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundDTO } from './../../dto/refund-dto';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, Injector } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RefundService } from '../../service/refund.service';


@Component({
  selector: 'refund-list',
  templateUrl: './refund-list.component.html',
  styleUrls: ['./refund-list.component.scss'],
})

export class RefundListComponent implements OnInit {
  form: FormGroup;
  checkboxes = false;
  refundList: Array<RefundDTO> = [];
  tmpDTO: any;

  constructor(
    private router: Router,
    public authService: AuthService,
    private route: ActivatedRoute,
    private toaster: ToastrService,
    private modalService: NgbModal,
    private refundService: RefundService
  ) { }

  ngOnInit() {
    this.refundService.getAll<RefundDTO[]>().subscribe(
      results => { 
        let dtos: RefundDTO[] = results;
        this.refundList = this.refundList.concat(dtos);
        console.log(dtos);
      }
    );
    // this.refundList.push(new RefundDTO(1, "2/10/2018", 'Passeio', "50.49", 0, 'WAITING', 'ALIMENTACAO', "a"));
  }

  ToggleCheckboxes(){
    if(this.refundList.length == 0){
      return;
    }

    let listCount = this.refundList.length - 1;

  }

  createRefundModal(modalComponent: any = CreateRefundComponent) {
    return this.modalService.open(modalComponent, { size: 'lg', backdrop: 'static' } );
  }

  viewRefundModal(refund: RefundDTO) {
    let refundModal = this.createRefundModal(ViewRefundComponent);
    refundModal.componentInstance.data = refund;
  }

  editRefundModal(refund: RefundDTO) {
    let refundModal = this.createRefundModal(CreateRefundComponent);
    refundModal.componentInstance.data = refund;
  }

}
