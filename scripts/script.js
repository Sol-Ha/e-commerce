// "import" for picking other js products

// variable from my "js class1"
let product1 = new Product("fruits","apples", 4, "discount", "10%");
let product2 = new Product("fruits", "bananas", 4, "no discount", "none");
let product3 = new Product("fruits", "pineapple", 5, "no discount", "none");

// variable from my "js class1"
let product4 = new Product("nuts", "cashews", 4, "discount", "10%");
let product5 = new Product("nuts", "almonds", 4, "no discount", "none");
let product6 = new Product("nuts", "walnuts", 5, "no discount", "none");

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

