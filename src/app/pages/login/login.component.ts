import { environment } from './../../../environments/environment';
import { TokenDTO } from './../../dto/token-dto';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { LoginDTO } from './../../dto/login-dto';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  submited: boolean = false;
  errors: Array<any> = [];

  constructor(
    private router: Router,
    private authService: AuthService,
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
      'password': new FormControl(null, {
        validators: [Validators.required],
        updateOn: 'submit'
      })
    });
  }

  onSubmit(user: LoginDTO) {
    if(this.form.invalid) {
      this.errors = [];
      if(!this.form.controls.email.valid)
        this.errors.push("Forneça um email válido!");
      if(!this.form.controls.password.valid)
        this.errors.push("Forneça uma senha válida!");
      return;
    }
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
          this.errors = ["Usuário ou senha incorreta!"];
        } else {
          this.errors = ["Ocorreu um erro durante a autenticação"];
        }
      });
  }

  get usuario() {
    return this.form.get('email');
  }


  get senha() {
    return this.form.get('password');
  }

}
