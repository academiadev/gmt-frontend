import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
    public activeModal: NgbActiveModal
  ) {}
}
