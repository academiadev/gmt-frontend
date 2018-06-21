import { UserValidators } from './../../validators/user.validators';
import { ChangePasswordDTO } from './../../dto/change-password-dto';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  errors: Array<any> = [];

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

  onSubmit(password: ChangePasswordDTO) {
    this.errors = [];
    if (this.form.invalid) {
      if (!this.form.controls.newPassword.valid)
        this.errors.push("Senha Invalida!");
      if (!this.form.controls.confirmNewPassword.valid)
        this.errors.push("Senha Invalida!");
      return;
    }
    if (UserValidators.confirmPassowrds(this.form)) {
      this.errors.push("Senhas não coincidem!");
      return;
    }

    this.userService.changePassword(password).subscribe((respose: Response) => {
      console.log(respose);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/home']);
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
