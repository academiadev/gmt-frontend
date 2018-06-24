import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RefundDTO } from './../../../dto/refund-dto';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'CreateRefund',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})

export class CreateRefundComponent implements OnInit{
  mode = "Adicionar";
  form: FormGroup;
  @Input() data: RefundDTO = null;
  uploads: Array<any> = [];

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'usuario': new FormControl(
        this.data.usuario,
        [
          Validators.minLength(4), Validators.required
        ]
      ),
      'senha': new FormControl('', [Validators.required])
    });

    if(this.data != null){
      this.mode = "Alterar";

    }
  }
}
