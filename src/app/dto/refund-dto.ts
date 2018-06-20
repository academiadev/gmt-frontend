export class RefundDTO {

    constructor(
        private idRefund: number,
        private categoria: string,
        private price: number,
        private itens: Array<any>,
    ) { }

}
