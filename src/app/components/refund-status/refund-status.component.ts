import { Component, Input } from '@angular/core';

@Component({
  selector: 'RefundModal',
  templateUrl: './refund-modal.component.html',
  styleUrls: ['./refund-modal.component.scss']
})

export class RefundModalComponent{

  static readonly APPROVED = "aceito";
  static readonly ANALYSIS = "em analise";
  static readonly UNAPPROVED = "reprovado";

  @Input() status = RefundModalComponent.APPROVED;

  constructor() {}
}
