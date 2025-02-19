class Product{
    constructor(name, price){
        this.name = name;
        this.price =price;
    }
    displayProduct(){
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $ ${this.price.toFixed(2)}`);
    }
    calculateTotal(discount){
        return this.price - (discount);
    }
    calculateTax(gst){
        return this.price - discount + gst;
    } 
}

const discount = 10;

const productOne = new Product("Iphone", 599);
const productTwo = new Product("S24", 399);
const productThree = new Product("S25 Ultra", 1299.00);
productOne.displayProduct();
productTwo.displayProduct();
productThree.displayProduct();

const total = productOne.calculateTotal(discount);
console.log(`Total Price after discount: $ ${total.toFixed(2)}`);

const priceWithTax = productOne.calculateTax(18.55);
console.log(`Price after tax: $ ${priceWithTax.toFixed(2)}`);