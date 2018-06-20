export class ChangePasswordDTO {

    constructor(
        private oldPassword: string,
        private newPassword: string
    ) { }

}
