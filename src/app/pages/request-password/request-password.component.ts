import { environment } from './../../../environments/environment';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../service/user.service';


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
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private toaster: ToastrService
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
    if (this.form.invalid) {
      this.errors = [];
      if (!this.form.controls.email.valid)
        this.errors.push("Forneça um email válido!");
      return;
    }
    this.userService.requestPassword(email).subscribe((response: Response) => {
      console.log(response);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/perdi-senha-enviado']);

    },
      (e) => {
        this.errors = ["Ocorreu um erro ao Enviar email"];
        throw e;
      });
  }

  get email() {
    return this.form.get('email');
  }
}
