export class Item {
    code: string;
    itemName: string;
    qty: string;


    constructor(code: string, itemName: string, qty: string) {
        this.code = code;
        this.itemName = itemName;
        this.qty = qty;
    }
}