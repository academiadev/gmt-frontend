import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'RefundModal',
  templateUrl: './refund-modal.component.html',
  styleUrls: ['./refund-modal.component.scss']
})

export class RefundModalComponent{

  @Input() title = "Reembolso";

  constructor(
    public activeModal: NgbActiveModal
  ) {}
  
}
