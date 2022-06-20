class Product extends Category{
  constructor(name, category, price, promotion, discount) {
    super(category);
    this.name = name;
    this.price = price;
    this.promotion = promotion;
    this.discount = discount;
  }
setName(n){
  this.name = n;
}
//   template literals
  feedback() {
    console.log(`Give me ${this.name} for ${this.promotion}`);
  }
  // command to add to price
  addPrice(changeTotal) {
    this.price += changeTotal;
  }
  // command to lower to price
  lowerPrice(changeTotal) {
    this.price -= changeTotal;
  }

  // calling the method directly inside the list
  toList(){
    let result = [this.name, super.category, this.price +` €`, this.promotion, this.discount];
    return result;
  }
}

