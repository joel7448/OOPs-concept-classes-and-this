class uber{
    constructor(price){
        this.price=price
    }
getamount(noofkms){
    return `Taxi fare : Rs.${noofkms*this.price}`;
}
}
const amount= new uber(60);
console.log(amount.getamount(100));