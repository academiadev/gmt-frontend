import { ViewRefundComponent } from './../../components/refund-modal/view/view-modal.component';
import { CreateRefundComponent } from './../../components/refund-modal/create/create-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundDTO } from './../../dto/refund-dto';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RefundService } from '../../service/refund.service';


@Component({
  selector: 'refund-list',
  templateUrl: './refund-list.component.html',
  styleUrls: ['./refund-list.component.scss'],
})

export class RefundListComponent implements OnInit {
  form: FormGroup;
  masterCheckbox = false;
  refundList: Array<RefundDTO> = [];
  checkboxList: Array<Boolean> = [];
  tmpDTO: any;

  constructor(
    private router: Router,
    public authService: AuthService,
    private route: ActivatedRoute,
    private toaster: ToastrService,
    private modalService: NgbModal,
    private refundService: RefundService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.refreshRefundList();
    //this.refundList.push(new RefundDTO(1, "2/10/2018", 'Passeio', "50.49", "joao", 'WAITING', 'ALIMENTACAO', "a"));
  }

  resetCheckboxes(){
    this.checkboxList = [];
    this.masterCheckbox = false;
    let listSize = this.refundList.length;
    while(listSize--) this.checkboxList.push(false);
  }

  refreshRefundList(){
    this.refundService.getAll<RefundDTO[]>().subscribe(
      results => { 
        let dtos: RefundDTO[] = results.map(r => {
          r.categoryFriendly = RefundDTO.friendlyCategory(r.refundCategory);
          return r;
        });
        this.refundList = dtos;
        this.resetCheckboxes();
      }
    );
  }

  toggleMasterCheckbox(){
    this.toggleCheckboxes(this.masterCheckbox)
  }

  toggleCheckboxes(checked: Boolean){
    let listSize = this.checkboxList.length;
    for(let i=0; i < listSize; i++){
      this.checkboxList[i] = checked;
    }
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

  setRefundStatus(status: String){
    let listSize = this.checkboxList.length;
    if(listSize == 0)
      return;
    let refunds = [] as any[];
    for(let i=0; i < listSize; i++){
      if(this.checkboxList[i])
        refunds.push(this.refundList[i]);
    }
    this.refundService.changeStatus(status, refunds).subscribe(e => this.refreshRefundList());
    this.refreshRefundList();
  }

}
