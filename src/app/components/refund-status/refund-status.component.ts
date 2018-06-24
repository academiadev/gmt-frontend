import { Component, Input } from '@angular/core';

@Component({
  selector: 'RefundStatus',
  templateUrl: './refund-status.component.html',
  styleUrls: ['./refund-status.component.scss']
})

export class RefundStatusComponent{

  static readonly APPROVED = "aceito";
  static readonly ANALYSIS = "em analise";
  static readonly UNAPPROVED = "reprovado";

  @Input() status = RefundStatusComponent.APPROVED;

  constructor() {}
}
