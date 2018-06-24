import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RefundDTO } from './../../../dto/refund-dto';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'CreateRefund',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})

export class CreateRefundComponent implements OnInit {
  currentComponent = this;
  mode = "Adicionar";
  form: FormGroup;
  @Input() data: RefundDTO = null;

  constructor(
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    
    let formDefault = { value: null, date: null, name: null, category: null };

    if(this.data != null){
      Object.assign(formDefault, this.data)
      formDefault.date = this.data.getSplitDate()
    }

    this.form = new FormGroup({
      'value': new FormControl(
        formDefault.value,
        [ Validators.required ]
      ),
      'date': new FormControl(
        formDefault.date,
        [ Validators.required ]
      ),
      'name': new FormControl(
        formDefault.name,
        [ Validators.required ]
      ),
      'category': new FormControl(
        formDefault.category,
        [ Validators.required ]
      ),
    });

    if(this.data != null){
      this.mode = "Alterar";
    }
  }
}
