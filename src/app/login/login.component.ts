import { UsuarioValidator } from './usuario.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { LoginDTO } from './../dto/login-dto';
import { HttpErrorResponse } from '@angular/common/http';
import { BadCredentialsError } from './../commons/bad-credentials';
import { ToastrService } from 'ngx-toastr';
import { TokenDTO } from '../dto/token-dto';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toaster: ToastrService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'usuario': new FormControl(
        '',
        [
          Validators.minLength(4), Validators.required,
          UsuarioValidator.temEspacosEmBranco
        ]
      ),
      'senha': new FormControl('', [Validators.required])
    });
  }

  onSubmit(user: LoginDTO) {
    this.authService.login(user).subscribe((token: TokenDTO) => {
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
      });
  }

  get usuario() {
    return this.form.get('usuario');
  }


  get senha() {
    return this.form.get('senha');
  }

}
