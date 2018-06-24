import { AuthService } from './../../../service/auth.service';
import { CreateRefundComponent } from './../create/create-modal.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RefundDTO } from './../../../dto/refund-dto';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'view-refund',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})

export class ViewRefundComponent{
  @Input() data: RefundDTO = null;

  constructor(
    public activeModal: NgbActiveModal,
    public modalService: NgbModal,
    public authService: AuthService
  ) { }

  changeToEditModal(){
    let refundModal = this.modalService.open(CreateRefundComponent, { size: 'lg', backdrop: 'static' } );
    refundModal.componentInstance.data = this.data;
  }

  getUploadFile(){
    if(this.data.file == null || this.data.file == ""){
      return "Não fornecido";
    }

    return "<a href='"+this.data.file+"'>Visualizar</a>"
  }
}
