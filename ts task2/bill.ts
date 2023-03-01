abstract class billing{
    price: number;
    unit: number;
    constructor(price: number, unit: number) {
        this.price = price;
        this.unit = unit;
    }
    public abstract billDetails(): any;
}
class Domestic extends billing{
    constructor(price: number, unit: number) {
        super(price, unit);
    }
    billDetails(): any{
        console.log("PRICE PER UNIT : "+(this.price),"    TOTAL DOMESTIC BILL PRICE   : "+(this.price*this.unit));
    }
}
let dom = new Domestic(5, 200);
dom.billDetails();
class Commercial extends billing{
    constructor(price: number, unit: number) {
        super(price, unit);
    }
    billDetails(): any {
        console.log("PRICE PER UNIT : "+(this.price),"   TOTAL COMMERCIAL BILL PRICE : "+(this.price*this.unit));
    }
}
let com = new Commercial(10, 400);
com.billDetails();