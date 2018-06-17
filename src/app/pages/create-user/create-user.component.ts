import { CreateOnlyUserDTO } from './../../dto/create-only-user-dto';
import { CreateUserCompanyDTO } from './../../dto/create-user-company-dto';
import { environment } from './../../../environments/environment';
import { TokenDTO } from './../../dto/token-dto';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { LoginDTO } from './../../dto/login-dto';
import { AuthService } from './../../service/auth.service';
import { UsuarioValidator } from './create-user.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { asElementData } from '@angular/core/src/view';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {
  form: FormGroup;

  hasInvitation : Boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'userName': new FormControl(null, {
        validators: [
          Validators.minLength(4), Validators.required
        ],
        updateOn: 'submit'
      }),
      'email': new FormControl(null, {
        validators: [
          Validators.minLength(4), Validators.required, Validators.email
        ],
        updateOn: 'submit'
      }),
      'password': new FormControl(null, {
        validators: [
          Validators.minLength(4), Validators.required
        ],
        updateOn: 'submit'
      }),
      'confirmPassword': new FormControl(null, {
        validators: [
          Validators.minLength(4), Validators.required
        ],
        updateOn: 'submit'
      }),
      'companyCode': new FormControl(null, {
        validators: [
          Validators.minLength(4), Validators.required
        ],
        updateOn: 'submit'
      }),
      'companyName': new FormControl(null, {
        validators: [
          Validators.minLength(4), Validators.required
        ],
        updateOn: 'submit'
      }),
    });
  }

  onSubmit(user: any) {
    //TODO verificar senhas iguais
    <CreateOnlyUserDTO>user
    if(this.hasInvitation) {
      delete user["value"]["companyName"];
      delete user["value"]["confirmPassword"];
      let dto: CreateOnlyUserDTO = user["value"] as CreateOnlyUserDTO;//TODO tentar user o construtor
      console.log(dto);
    }else {
      delete user["value"]["companyCode"];
      delete user["value"]["confirmPassword"];
      let dto: CreateUserCompanyDTO = user["value"] as CreateUserCompanyDTO;
      console.log(dto);
    }
    /*this.authService.login(user).subscribe((token: TokenDTO) => {
      localStorage.setItem(environment.tokenName, token.access_token);

      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/home']);

      this.authService.refresh().subscribe(e => {
        console.log(e);
      });

    },
      (e) => {
        if (e instanceof BadCredentialsError) {
          this.senha.setErrors({ 'invalido': true });
        } else {
          throw e;
        }
      });*/
  }

  get usuario() {
    return this.form.get('usuario');
  }


  get senha() {
    return this.form.get('senha');
  }

}
