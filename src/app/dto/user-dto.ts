export class UserDTO {

    constructor(
        private idUser ?: number,
        private name ?: string,
        private email ?: string,
        private password ?: string,
        private companyCode ?: string,
        private companyName ?: string
    ) { }

}
