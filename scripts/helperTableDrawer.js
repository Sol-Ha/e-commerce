function createHeaderTable(nameOfMyTable) {

    
    let headerTable = document.createElement("thead");
    myTable.appendChild(headerTable); 

    let rowHeaderTable = document.createElement("tr");
    headerTable.appendChild(rowHeaderTable); 

    for (let i = 0; i < nameOfMyTable.length; i++) {
        let cellHeaderTable = document.createElement("td");
        rowHeaderTable.appendChild(cellHeaderTable); 
        cellHeaderTable.appendChild(document.createTextNode(nameOfMyTable[i]));
    }
}

function createBodyTable(product){

    let list = product.toList();

    let rowBodyTable = document.createElement("tr");
    bodyTable.appendChild(rowBodyTable); 

    for (let i = 0; i < 5; i++) {
        let cellBodyTable = document.createElement("td");
        rowBodyTable.appendChild(cellBodyTable); 
        cellBodyTable.appendChild(document.createTextNode(list[i]));
    }
    
};
