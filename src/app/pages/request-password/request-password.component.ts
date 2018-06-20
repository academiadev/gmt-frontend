import { environment } from './../../../environments/environment';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { RequestPasswordService } from '../../service/request-password.service';


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
    private requestPasswordService: RequestPasswordService,
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
    this.requestPasswordService.requestPassword(email).subscribe((reponse: boolean) => {

      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/predi-senha-enviado']);

      this.authService.refresh().subscribe(e => {
        console.log(e);
      });

    },
      (e) => {
        if (e instanceof BadCredentialsError) {
          this.errors = ["Usuário ou senha incorreta!"];
        } else {
          this.errors = ["Ocorreu um erro durante a autenticação"];
        }
      });
  }

  get email() {
    return this.form.get('email');
  }
}
