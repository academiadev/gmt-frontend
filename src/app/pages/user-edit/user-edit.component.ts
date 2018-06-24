import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../../service/user.service";
import { ChangePassworDTO } from "../../dto/change-passwor-dto";
import { UserValidators } from "../../validators/user.validators";

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})

export class UserEditComponent implements OnInit {
  form: FormGroup;
  errors: Array<any> = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  //Add ao validator:
  //O nivel da senha;
  ngOnInit() {
    this.form = new FormGroup({
      'oldPassword': new FormControl(null, {
        validators: [Validators.minLength(4), Validators.required],
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
    });
  }

  onSubmit(passwords: ChangePassworDTO) {
    if (this.form.invalid) {
      this.errors = [];
      if (!this.form.controls.oldPassword.valid)
        this.errors.push("Forneça uma senha válida!");
      if (!this.form.controls.password.valid)
        this.errors.push("Forneça uma nova senha válida!");
      if (!this.form.controls.confPassword.valid)
        this.errors.push("Confirmacao de senha Invalida!");
      return;
    }

    if (UserValidators.confirmPasswords(this.form)) {
      if (this.form.valid) { this.errors = []; }
      this.errors.push("Senhas não coincidem!");
      return;
    }

    this.userService.changePassword(passwords).subscribe((response: Response) => {
      console.log(response);
    }, (e) => { 
      this.errors = ["Ocorreu um erro durante a autenticação"];
    });

  }

}
