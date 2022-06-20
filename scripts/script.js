// "import" for picking other js products

// variable from my "js class1"
let product1 = new Product("apples", "fruit", 4, "discount", "10%");
let product2 = new Product("bananas", "fruit", 4, "no discount", "none");
let product3 = new Product("pineapple", "fruit", 5, "no discount", "none");

// variable from my "js class1"
let product4 = new Product("cashews", "nuts", 4, "discount", "10%");
let product5 = new Product("almonds", "nuts", 4, "no discount", "none");
let product6 = new Product("walnuts", "nuts", 5, "no discount", "none");

let titles = ["Name", "Category", "Price", "Promotion", "Discount"];
let myTable = document.querySelector("table");

let promoItem = document.querySelector("article");


// parsing array "titles" to the function(aka method) create rows
createRows(titles);
indexProduct(product1);
indexProduct(product2);
indexProduct(product3);
indexProduct(product4);
indexProduct(product5);
indexProduct(product6);

