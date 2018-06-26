import { CategoryService } from './../../../service/category.service';
import { RefundService } from './../../../service/refund.service';
import { AuthService } from './../../../service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RefundDTO } from './../../../dto/refund-dto';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


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
  categories: Array<Object> = [];

  constructor(
    public activeModal: NgbActiveModal,
    public authService: AuthService,
    private refundService: RefundService,
    private categoryService: CategoryService,
    private parserFormatter: NgbDateParserFormatter
  ) {}

  ngOnInit(): void {

    this.categories = this.categoryService.getAllFriendly();
    
    let formDefault = { value: null, date: null, name: null, refundCategory: null };

    console.log(this.authService.getRole());

    if(this.data != null){
      Object.assign(formDefault, this.data)
      console.log(this.data);
      formDefault.date = RefundDTO.getSplitDate(this.data.date);
      console.log(formDefault.date);
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
      'refundCategory': new FormControl(
        formDefault.refundCategory,
        [ Validators.required ]
      ),
    });

    if(this.data != null){
      this.mode = "Alterar";
    }
  }
    
  onSubmit(form: RefundDTO){
    form.file = "";
    //@ts-ignore
    form.date = this.formatSendDate(form.date);
    this.refundService.update(form).subscribe(
      e => location.reload(), e => { console.log(e); }
    );
  }

  formatSendDate(date) {
    let day = date.day.toString();

    if(day.length == 1){
      day = "0".concat(day);
    }

    let month = date.month.toString();
    if(month.length == 1){
      month = "0".concat(month);
    }

    let year = date.year;

    return day+"/"+month+"/"+year;
  }
}
