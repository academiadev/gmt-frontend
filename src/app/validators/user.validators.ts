import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export class UserValidators {

    static confirmPasswords(formGroup: FormGroup): ValidationErrors | boolean {
        const password: string = formGroup.controls.password.value;
        const confPassword: string = formGroup.controls.confPassword.value;
        if (password != confPassword) {
            return { confirmPassowrds: true }
        }
        return false;
    }

    static spaces(control: AbstractControl): ValidationErrors | null {
        const valorDoCampo: string = control.value;
        if (valorDoCampo.indexOf(' ') >= 0) {
            return { temEspacosEmBranco: true };
        }
        return null;
    }

}
