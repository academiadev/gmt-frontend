import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'RefundStatus',
  templateUrl: './refund-status.component.html',
  styleUrls: ['./refund-status.component.scss']
})

export class RefundStatusComponent implements OnInit{
  statusClass: String = "";
  statusIcon: String = "";

  static readonly APPROVED = "aceito";
  static readonly ANALYSIS = "analise";
  static readonly UNAPPROVED = "reprovado";

  @Input() status: String = RefundStatusComponent.APPROVED;

  constructor() {}

  ngOnInit(): void {
    this.statusClass = this.classMap(this.status);
    this.statusIcon = this.iconMap(this.status);
  }

  classMap(status){
    switch(status){
      case RefundStatusComponent.APPROVED:
        return 'text-success';
      case RefundStatusComponent.ANALYSIS:
        return 'text-warning';
      case RefundStatusComponent.UNAPPROVED:
        return 'text-danger';
    }

    return 'text-secondary';
  }

  iconMap(status) {
    switch(status){
      case RefundStatusComponent.APPROVED:
        return 'check-circle';
      case RefundStatusComponent.ANALYSIS:
        return 'question-circle';
      case RefundStatusComponent.UNAPPROVED:
        return 'times-circle';
    }

    return 'circle';
  }
}
