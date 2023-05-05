export class Product{
    url: string;
    name: string;
    price: string;

    constructor(productUrl: string, productName: string, productPrice: string){
        this.url = productUrl;
        this.name = productName;
        this.price = productPrice;
    }

}