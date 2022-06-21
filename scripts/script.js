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

// parsing array "titles" to the function(aka method) create rows
createHeaderTable(titles);

// out for creating in order
let bodyTable = document.createElement("tbody");
myTable.appendChild(bodyTable); 

createBodyTable(product1);
createBodyTable(product2);
createBodyTable(product3);
createBodyTable(product4);
createBodyTable(product5);
createBodyTable(product6);

