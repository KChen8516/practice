const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
}

function addBookToLibrary() {
    
}

const hobbit = new Book('J.R.R. Tolkien', 'The Hobbit', 295, 'not read yet');

console.log(hobbit.info());