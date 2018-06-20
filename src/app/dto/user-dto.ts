export class UserDTO {

    constructor(
        private idUser: number,
        private name: string,
        private email: string,
        private password: string,
        private code: string
    ) { }

}
