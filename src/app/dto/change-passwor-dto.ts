export class ChangePassworDTO {

    constructor(
        private oldPassword: string,
        private password: string,
        private confPassword: string,
    ) { }

}
