import { RefundDTO } from "./refund-dto";

export class AdminRefundDTO extends RefundDTO{
    constructor(
        public titulo: String,
        public valor: Number,
        public status: String,
        public usuario: String,
        public categoria: String
    ) { super(titulo, valor, status, categoria); }
}
