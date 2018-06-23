import { environment } from './../../../environments/environment';
import { BadCredentialsError } from './../../commons/bad-credentials';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, Form } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../service/user.service';
import { UserDTO } from '../../dto/user-dto';
import { UserValidators } from '../../validators/user.validators';

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

  //Add ao validator:
  //verificar o email;
  //O nivel da senha;
  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, {
        validators: [ Validators.minLength(4), Validators.required ],
        updateOn: 'submit'
      }),
      'email': new FormControl(null, {
        validators: [ Validators.minLength(4), Validators.required, Validators.email ],
        updateOn: 'submit'
      }),
      'password': new FormControl(null, {
        validators: [ Validators.minLength(4), Validators.required ],
        updateOn: 'submit'
      }),
      'confPassword': new FormControl(null, {
        validators: [ Validators.minLength(4), Validators.required ],
        updateOn: 'submit'
      }),
      'companyCode': new FormControl(null, {
        validators: [],
        updateOn: 'submit'
      }),
      'companyName': new FormControl(null, {
        validators: [],
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
      if (!this.form.controls.confPassword.valid)
        this.errors.push("Forneça um Password válido!");
      return;
    }
    //validador de email
    if (UserValidators.confirmPassowrds(this.form)) {
      this.errors.push("Senhas não coincidem!");
      return;
    }

    // if (UserValidators.requestEmail('')) {
    //   this.errors.push("Senhas não coincidem!");
    //   return;
    // }
    if (this.hasInvitation) {
      this.userService.registerUser(user).subscribe((response: Response) => {
        console.log(response);
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/login']);
      }, (e) => {
        if (e instanceof BadCredentialsError) { 
          this.form.setErrors({ 'invalido': true });
        } else {
          this.errors = ["Ocorreu um erro durante a autenticação"];
        }
      });

    }
    else {
      this.userService.registerUserCompany(user).subscribe((response: Response) => {
        console.log(response);
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigate([returnUrl || '/login']);
      }, (e) => {
        if (e instanceof BadCredentialsError) { 
          this.form.setErrors({ 'invalido': true });
        } else {
          this.errors = ["Ocorreu um erro durante a autenticação"];
        }
      });
    }



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
