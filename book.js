let myLibrary = [
    {title:"Bourne Identity", author:"R.Ludlum", pages:"312", read:"yes"}
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
    
}