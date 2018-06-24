export class RefundDTO {
    constructor(
        public id: Number,
        public date: String,
        public name: String,
        public value: Number,
        public user: String,
        public status: String,
        public refundCategory: String,
        public file: String,
    ) { }
}
