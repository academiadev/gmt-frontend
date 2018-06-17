import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';



export class UsuarioValidator {

    static temEspacosEmBranco(control: AbstractControl): ValidationErrors | null {
        const valorDoCampo: string = control.value;
        if (valorDoCampo.indexOf(' ') >= 0) {
            return { temEspacosEmBranco: true };
        }
        return null;
    }

    static jaExiste(control: AbstractControl): Promise<ValidationErrors> | null {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'bnubruno') {
                    resolve({ jaExisteP: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
