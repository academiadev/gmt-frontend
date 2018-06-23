import { UserValidators } from './../../validators/user.validators';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { UserService } from '../../service/user.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './../../service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  errors: Array<any> = [];
  header: Headers;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'password': new FormControl('',
        [
          Validators.minLength(4), Validators.required,
          UserValidators.temEspacosEmBranco
        ]),
      'confPassword': new FormControl('',
        [
          Validators.minLength(4), Validators.required,
          UserValidators.temEspacosEmBranco
        ]),
    });
  }

  onSubmit(password: string) {
    this.errors = [];
    if (this.form.invalid) {
      if (!this.form.controls.password.valid)
        this.errors.push("Senha Invalida!");
      if (!this.form.controls.confPassword.valid)
        this.errors.push("Senha Invalida!");
      return;
    }
    if (UserValidators.confirmPasswords(this.form)) {
      this.errors.push("Senhas não coincidem!");
      return;
    }

    let headerToken: string = this.route.snapshot.params.codigo;

    this.userService.newPassword(password).subscribe((respose: Response) => {
      console.log(respose);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/login']);
    },
      (e) => {
        if (e instanceof BadCredentialsError) {
          this.errors = ["Acesso nao autorizado!"];
        } else {
          this.errors = ["Ocorreu um erro durante a autenticação"];
        }
      });
  }



}
