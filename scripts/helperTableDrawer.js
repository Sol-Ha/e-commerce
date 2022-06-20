// making table

function createRows(namingCategories) {
    
    // variable to create new lines
    let tHeader = document.createElement("thead");
    myTable.appendChild(tHeader);

    // creating my table
    let trHeader = document.createElement("tr");
    tHeader.appendChild(trHeader);

    for (let i = 0; i < namingCategories.length; i++) {
        let tdHeader = document.createElement("td");
        tHeader.appendChild(tdHeader);
        // don't forget to tell the value of "index" into your array
        tdHeader.appendChild(document.createTextNode(namingCategories[i]));    
    }
}

function indexProduct(product){

    let list = product.toList();
        // variable to create new lines
        let tBody = document.createElement("tbody");
        myTable.appendChild(tBody);
    
        let trBody = document.createElement("tr");
        tBody.appendChild(trBody);
    
        for (let i = 0; i < 5; i++) {
            let tdBody = document.createElement("td");
            tBody.appendChild(tdBody);
            // don't forget to tell the value of "index" into your array
            tdBody.appendChild(document.createTextNode(list[i]));    
        }
    }