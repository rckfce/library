let myLibrary = [
    {title:"Bourne Identity", author:"R.Ludlum", pages:311, read:"Not read yet"},
    {title:"Bourne Identity1", author:"R.Ludlum", pages:"312", read:"Read it"},
    {title:"Bourne Identity2", author:"R.Ludlum", pages:"312", read:"Read it"},
    {title:"Bourne Identity4", author:"R.Ludlum", pages:"312", read:"Not read yet"}
];

/*   constuctor    */

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = () => {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("did-read").value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function addNewBook() {
    if(validateInputs()){
        addBookToLibrary();
        appendNewRow();
        document.querySelector(".myForm").reset();
        document.getElementById("add-new-book").classList.add("hidden");
    }
}

function validateInputs() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("did-read").value;
    if(title === "" || author === "" || pages === "" || read === "") return false;
    return true;
}

function checkStatus(e) {
    if(e === "Not read yet") return true;
    return false;
}

function appendNewRow() {
    let row = document.createElement("tr");
    for(let properties in myLibrary[myLibrary.length - 1]) {
        let cell = document.createElement("th");
        let cellNode = document.createTextNode(myLibrary[myLibrary.length - 1][properties.toString()]);
        cell.appendChild(cellNode);
        row.appendChild(cell);
        if(checkStatus(myLibrary[myLibrary.length - 1][properties.toString()])) {
            let readImg = document.createElement("img");
            readImg.setAttribute("onclick", "changeStatus(this)");
            readImg.setAttribute("class", "status");
            readImg.setAttribute("data-id", myLibrary.length - 1);
            readImg.src = "img/book-read.png";
            cell.appendChild(readImg);
        }
    }
    let lastCell = document.createElement("th");
    let editImg = document.createElement("img");
    editImg.setAttribute("onclick", "deleteRow(this)");
    editImg.setAttribute("data-id", myLibrary.length - 1);
    editImg.src = "img/delete.png";
    lastCell.classList.add("edit");
    lastCell.appendChild(editImg);
    row.appendChild(lastCell);
    table.appendChild(row);
}

const table = document.querySelector(".content");

function displayTable() {
    for(let i = 0; i < myLibrary.length; i++) {
        let row = document.createElement("tr");
        for(let properties in myLibrary[i]) {
            let cell = document.createElement("th");
            let cellNode = document.createTextNode(myLibrary[i][properties.toString()]);
            cell.appendChild(cellNode);
            if(checkStatus(myLibrary[i][properties.toString()])) {
                let readImg = document.createElement("img");
                readImg.setAttribute("onclick", "changeStatus(this)");
                readImg.setAttribute("class", "status");
                readImg.setAttribute("data-id", i);
                readImg.src = "img/book-read.png";
                cell.appendChild(readImg);
            }
            row.appendChild(cell);
        }
        let lastCell = document.createElement("th");
        let editImg = document.createElement("img");
        editImg.setAttribute("onclick", "deleteRow(this)");
        editImg.setAttribute("data-id", i);
        editImg.src = "img/delete.png";
        lastCell.classList.add("edit");
        lastCell.appendChild(editImg);
        row.appendChild(lastCell);
        table.appendChild(row);
    }
}
displayTable();

function addNew() {
    let tableFooter = document.getElementById("add-new-book");
    tableFooter.classList.remove("hidden");
}

/* not used. did not want to delete in case i need it. see above function */
function newBookForm() {
    const tableFooter = document.querySelector(".add-new-book");

    let newFormRow = document.createElement("tr");
    tableFooter.appendChild(newFormRow);

    let newForm = document.createElement("form");
    newForm.setAttribute("action", "post");
    newFormRow.appendChild(newForm);

    /*------------------ Title Cell ---------------*/
    let newTitleCell = document.createElement("th");
    newForm.appendChild(newTitleCell);

    let newInputTitle = document.createElement("input");
    newInputTitle.setAttribute("type", "text");
    newInputTitle.setAttribute("id", "title");
    newInputTitle.setAttribute("name", "title");
    newInputTitle.setAttribute("placeholder", "Book title");
    newInputTitle.setAttribute("required", "");
    newTitleCell.appendChild(newInputTitle);

    /*------------------ Author Cell ---------------*/
    let newAuthorCell = document.createElement("th");
    newForm.appendChild(newAuthorCell);

    let newInputAuthor = document.createElement("input");
    newInputAuthor.setAttribute("type", "text");
    newInputAuthor.setAttribute("id", "author");
    newInputAuthor.setAttribute("name", "author");
    newInputAuthor.setAttribute("placeholder", "Book author");
    newInputAuthor.setAttribute("required", "");
    newAuthorCell.appendChild(newInputAuthor);

    /*----------------- Pages Cell -----------------*/
    let newPagesCell = document.createElement("th");
    newForm.appendChild(newPagesCell);

    let newInputPages = document.createElement("input");
    newInputPages.setAttribute("type", "number");
    newInputPages.setAttribute("id", "pages");
    newInputPages.setAttribute("name", "pages");
    newInputPages.setAttribute("required", "");
    newPagesCell.appendChild(newInputPages);

    /*-------------- Read or not cell ---------------*/
    let newReadOrNotCell = document.createElement("th");
    newForm.appendChild(newReadOrNotCell);

    let newInputReadOrNot = document.createElement("input");
    newInputReadOrNot.setAttribute("name", "ReadOrNot");
    newInputReadOrNot.setAttribute("list", "select-two");
    newReadOrNotCell.appendChild(newInputReadOrNot);

    let newInputDatalist = document.createElement("datalist");
    newInputDatalist.setAttribute("id", "select-two");
    newInputReadOrNot.appendChild(newInputDatalist);

    let newInputDatalistOptionOne = document.createElement("option");
    newInputDatalistOptionOne.setAttribute("value", "Read it");
    newInputDatalist.appendChild(newInputDatalistOptionOne);

    let newInputDatalistOptionTwo = document.createElement("option");
    newInputDatalistOptionTwo.setAttribute("value", "Not read it");
    newInputDatalist.appendChild(newInputDatalistOptionTwo);
    
    /*------------------- Check cell -----------------*/
    let newCheckCell = document.createElement("th");
    newCheckCell.setAttribute("class", "check");
    newForm.appendChild(newCheckCell);

    let newInputCheck = document.createElement("input");
    newInputCheck.setAttribute("type", "image");
    newInputCheck.setAttribute("src", "img/check.png");
    newCheckCell.appendChild(newInputCheck);

}

function refreshTable() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    displayTable();
}

function deleteRow(d) {
    myLibrary.splice(d.getAttribute("data-id"), 1);
    refreshTable();
}

function changeStatus(d) {
    let statusIndex = d.getAttribute("data-id");
    myLibrary[statusIndex].read = "Read it";
    refreshTable();
    console.log(myLibrary);
}
