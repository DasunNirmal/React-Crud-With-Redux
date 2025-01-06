export class Item {
    code: string;
    itemName: string;
    qty: number;


    constructor(code: string, itemName: string, qty: number) {
        this.code = code;
        this.itemName = itemName;
        this.qty = qty;
    }
}