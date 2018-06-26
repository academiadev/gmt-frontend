export class RefundDTO {
    categoryFriendly: String = "";
    constructor(
        public id: Number = 0,
        public date: String = "1/10/2010",
        public name: String = "",
        public value: String = "0.0",
        public user: String = "",
        public refundStatus: String = "",
        public refundCategory: String = "",
        public file: String = "NULL"
    ) { 
        this.categoryFriendly = RefundDTO.friendlyCategory(this.refundCategory);
    }

    getSplitDate() {
        let splitDate = this.date.split(/\/|\-/)
        return {'day': parseInt(splitDate[0]), 'month': parseInt(splitDate[1]), 'year': parseInt(splitDate[2])}
    }

    static friendlyCategory(category){
        switch(category){
            case 'ALIMENTACAO':
                return 'Alimentação';
            case 'TRANSPORTE':
                return 'Transporte';
            case 'HOSPEDAGEM':
                return 'Hospedagem';
        }
        return 'Indefinida';
    }
}
