export class ChangePasswordDTO {

    constructor(
        private newPassword: string,
        private confirmNewPassword: string
    ) { }

}
