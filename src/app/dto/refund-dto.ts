export class RefundDTO {
    constructor(
        public id: Number = 0,
        public date: String = "1/10/2010",
        public name: String = "",
        public value: Number = 0,
        public user: String = "",
        public status: String = "",
        public category: String = "",
        public file: String = "",
    ) { }

    getSplitDate(){
        let splitDate = this.date.split(/\/|\-/)
        return {'day': parseInt(splitDate[0]), 'month': parseInt(splitDate[1]), 'year': parseInt(splitDate[2])}
    }
}
