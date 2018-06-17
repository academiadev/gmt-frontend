

export class CreateUserCompanyDTO {

    constructor(
        private userName: string,
        private email: string,
        private password: string,
        private companyName: string
    ) { }

}
