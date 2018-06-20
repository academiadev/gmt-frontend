import { environment } from './../../../environments/environment';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../service/user.service';
import { UserDTO } from '../../dto/user-dto';

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent implements OnInit {
  form: FormGroup;
  hasInvitation: Boolean = false;
  errors: Array<any> = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    private toaster: ToastrService
  ) { }

  //criar page de validador para veriricar o email,
  //verificar o nivel da senha, verificar se as senhas sao iguais
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
      'radio': new FormControl(null, {
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
    //colocar validador de senha
    //validador de email
    if (this.form.invalid) {//TODO validacoes criacao de usuario
      console.log('tese');
      this.errors = [];
      if (!this.form.controls.email.valid)
        this.errors.push("Forneça um email válido!");
      if (!this.form.controls.password.valid)
        this.errors.push("Forneça uma senha válida!");
      return;
    }

    let userDTO: any;
    if (this.hasInvitation) {
      userDTO = user as UserDTO;//TODO tentar user o construtor
    }
    console.log(userDTO);

    /*
    if(this.hasInvitation) {
      this.userService.registerOnlyUser(dto).subscribe((token: CreateOnlyUserDTO) => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/home']);  
      },
      (e) => {
        if (e instanceof BadCredentialsError) {//TODO verificar erros
          this.password.setErrors({ 'invalido': true });
        } else {
          throw e;
        }
      });
    }else {
      this.createUserService.registerUserCompany(dto).subscribe((token: CreateUserCompanyDTO) => {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/home']);  
      },
      (e) => {
        if (e instanceof BadCredentialsError) {//TODO verificar erros
          this.password.setErrors({ 'invalido': true });
        } else {
          throw e;
        }
      });     
    }
     */
  }

}
