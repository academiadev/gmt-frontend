

export class CreateOnlyUserDTO {

    constructor(
        private userName: string,
        private email: string,
        private password: string,
        private companyCode: string
    ) { }

}
