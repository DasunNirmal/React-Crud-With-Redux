export class Item {
    code: string;
    name: string;
    quantity: number;


    constructor(code: string, itemName: string, qty: number) {
        this.code = code;
        this.name = itemName;
        this.quantity = qty;
    }
}