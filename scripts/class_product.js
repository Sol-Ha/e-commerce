class Product extends Category{
  constructor(name, category, price, promotion, discount) {
    super(category);
    this.name = name;
    this.price = price;
    this.promotion = promotion;
    this.discount = discount;
  }

  // calling the method directly inside the list

  toList(){
    let result = [this.name, this.category, this.price +` €`, this.promotion, this.discount];
    return result;
  }

  inPromotion(){
    let result = [`${this.name} has ${this.discount}.`]
    return result;
  }

}

