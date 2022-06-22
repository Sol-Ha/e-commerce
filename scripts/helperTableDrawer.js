function createHeaderTable(nameOfMyTable) {


    let headerTable = document.createElement("thead");
    myTable.appendChild(headerTable);

    let rowHeaderTable = document.createElement("tr");
    headerTable.appendChild(rowHeaderTable);

    for (let i = 0; i < nameOfMyTable.length; i++) {
        let cellHeaderTable = document.createElement("td");
        rowHeaderTable.appendChild(cellHeaderTable);
        cellHeaderTable.appendChild(document.createTextNode(nameOfMyTable[i]));
        cellHeaderTable.style.font = " 1.2em arial,serif";
    }
}

function createBodyTable(product) {

    let list = product.toList();

    let rowBodyTable = document.createElement("tr");
    bodyTable.appendChild(rowBodyTable);

    for (let i = 0; i < list.length; i++) {
        let cellBodyTable = document.createElement("td");
        rowBodyTable.appendChild(cellBodyTable);
        cellBodyTable.appendChild(document.createTextNode(list[i]));
    }

};

function showInPromotion(promo) {

    let list = promo.inPromotion();
    let createAnewList = document.createElement("li");

    for (let i = 0; i < list.length; i++) {
        createList.appendChild(createAnewList);
        createAnewList.appendChild(document.createTextNode(list[i]));
    }
};
