let myLibrary = [
    {title:"Bourne Identity", author:"R.Ludlum", pages:"312", read:"yes"},
    {title:"Bourne Identity1", author:"R.Ludlum", pages:"312", read:"yes"},
    {title:"Bourne Identity2", author:"R.Ludlum", pages:"312", read:"yes"},
    {title:"Bourne Identity4", author:"R.Ludlum", pages:"312", read:"yes"}
];


/*   constuctor    */

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


const addBookToLibrary = () => {
    let title = "The Hobbit";
    let author = "J.R.R. Tolkien";
    let pages = "295";
    let read = "not read yet";
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}
  
addBookToLibrary();

console.log(myLibrary);
const table = document.querySelector(".content");

function displayTable() {
    for(let i = 0; i < myLibrary.length; i++) {
        let row = document.createElement("tr");
        for(let properties in myLibrary[i]) {
            let cell = document.createElement("th");
            let cellNode = document.createTextNode(myLibrary[i][properties]);
            cell.appendChild(cellNode);
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

const newBookButton = document.querySelector(".new-book");
newBookButton.addEventListener("click", newBookForm);

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

newBookForm();

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
