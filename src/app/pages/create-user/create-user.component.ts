import { UserService } from '../../service/user.service';
import { UserDTO } from '../../dto/user-dto';
import { UserValidators } from '../../validators/user.validators';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {
  form: FormGroup;
  errors: Array<any> = [];
  hasInvitation: Boolean = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  //Add ao validator:
  //O nivel da senha;
  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, {
        validators: [Validators.minLength(4), Validators.required],
        updateOn: 'submit'
      }),
      'email': new FormControl(null, {
        validators: [Validators.minLength(4), Validators.required, Validators.email],
        updateOn: 'submit'
      }),
      'password': new FormControl(null, {
        validators: [Validators.minLength(4), Validators.required],
        updateOn: 'submit'
      }),
      'confPassword': new FormControl(null, {
        validators: [Validators.minLength(4), Validators.required],
        updateOn: 'submit'
      }),
      'company': new FormControl(null, {
        validators: [Validators.required],
        updateOn: 'submit'
      }),
    });
  }

  onSubmit(user: UserDTO) {
    if (this.form.invalid) {
      this.errors = [];
      if (!this.form.controls.name.valid)
        this.errors.push("Forneça um nome válido!");
      if (!this.form.controls.email.valid)
        this.errors.push("Forneça um email válido!");
      if (!this.form.controls.password.valid)
        this.errors.push("Forneça um password válido!");
      if (!this.form.controls.company.valid)
        this.errors.push("Forneça uma empresa!");
      return;
    }

    if (UserValidators.confirmPasswords(this.form)) {
      this.errors.push("Senhas não coincidem!");
      return;
    }

    if (this.userService.requestEmail(this.form.controls.email.value)) {
      //this.errors.push("Email Ja utilizado!");
      //return;
    }

    let callbackSuccess = function (response: Response) {
      console.log(response);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/login']);
    };

    let callbackFail = function (e) {
      if (e instanceof BadCredentialsError) {
        this.form.setErrors({ 'invalido': true });
      } else {
        this.errors = ["Ocorreu um erro durante a autenticação"];
      }
    };

    if (this.hasInvitation) {
      this.userService.registerUser(user).subscribe(callbackSuccess, callbackFail);
    }
    else {
      this.userService.registerUserCompany(user).subscribe(callbackSuccess, callbackFail);
    }

  }

}
