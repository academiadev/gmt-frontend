import { UserService } from '../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})

export class RequestPasswordComponent implements OnInit {
  form: FormGroup;
  submited: boolean = false;
  errors: Array<any> = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, {
        validators: [
          Validators.minLength(4), Validators.required, Validators.email
        ],
        updateOn: 'submit'
      }),
    });
  }

  onSubmit(email: string) {
    let enviado = false;
    if (this.form.invalid) {
      this.errors = [];
      if (!this.form.controls.email.valid)
        this.errors.push("Forneça um email válido!");
      return;
    }
    this.userService.requestPassword(email).subscribe((response: Response) => {
      console.log(response);
      enviado = true;
    },
      (e) => {
      this.errors = ["Ocorreu um erro ao Enviar email"];
      });
  }

}
