import { RefundDTO } from './../../../dto/refund-dto';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'CreateRefund',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})

export class CreateRefundComponent{
  @Input() data: RefundDTO;
}
