class Product extends Category{
  constructor(name, category, price, promotion, discount) {
    super(name);
    this.category = category;
    this.price = price;
    this.promotion = promotion;
    this.discount = discount;
  }

  // calling the method directly inside the list

  toList(){
    let result = [this.name, this.category, this.price +` €`, this.promotion, this.discount];
    return result;
  }
}
