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

  hasInvitation : Boolean = false;
  errors: Array<any> = [];

  constructor(
    private router: Router,
    private userService: UserService,
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
    /*if(this.form.invalid) {//TODO validacoes criacao de usuario
      this.errors = [];
      if(!this.form.controls.email.valid)
        this.errors.push("Forneça um email válido!");
      if(!this.form.controls.password.valid)
        this.errors.push("Forneça uma senha válida!");
      return;
    }*/

    let dto:any;
    //TODO essa e a melhor forma de criar os dois tipos de DTO?
    if(this.hasInvitation) {
      delete user["companyName"];
      delete user["confirmPassword"];
      dto = user as UserDTO;//TODO tentar user o construtor
    }else {
      delete user["companyCode"];
      delete user["confirmPassword"];
      dto = user as UserDTO;
    }
    console.log(dto);
    
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
