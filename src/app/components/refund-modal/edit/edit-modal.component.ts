import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'RefundModal',
  templateUrl: './refund-modal.component.html',
  styleUrls: ['./refund-modal.component.scss']
})

export class RefundModalComponent{

  constructor(
    public activeModal: NgbActiveModal
  ) {}
  
}
