// "import" for picking other js products

// VARIABLES CONNECTED TO JS CLASS
// variable from my "js class1"
let product1 = new Product("Apples", "Fruits", 4, "Promotion", "10% discount");
let product2 = new Product("Bananas", "Fruits", 4, "No promotion", "No discount");
let product3 = new Product("Pineapple", "Fruits", 5, "No promotion", "No discount");

// variable from my "js class1"
let product4 = new Product("Cashews", "Nuts", 4, "Promotion", "10% discount");
let product5 = new Product("Almonds", "Nuts", 4, "No promotion", "No discount");
let product6 = new Product("Walnuts", "Nuts", 5, "No promotion", "No discount");

let titles = ["Name", "Category", "Price", "Promotion", "Discount"];


// HTML ELEMENTS
const myTable = document.querySelector("table");
const myArticle = document.querySelector("article");


// TABLE COMMANDS
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

let createDiv = document.createElement("div");
myArticle.appendChild(createDiv);

let createList = document.createElement("ul");
createDiv.appendChild(createList);

showInPromotion(product1);
showInPromotion(product2);
showInPromotion(product3);
showInPromotion(product4);
showInPromotion(product5);
showInPromotion(product6);



