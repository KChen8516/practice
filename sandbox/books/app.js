// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI constructor
function UI() {}

UI.prototype.addBookToTable = function(book) {
    // console.log(book);
    const bookList = document.getElementById('book-list');
    // create a row el
    const row = document.createElement('tr');
    // add the content
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    bookList.appendChild(row);
    
    // this.clearFields();
}

UI.prototype.clearFields = function() {
    document.getElementById('book-title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

UI.prototype.showAlert = function(msg, className) {
    // create the div
    const div = document.createElement('div');

    div.classList.add(className);
    div.classList.add('alert');
    // text
    const text = document.createTextNode(msg);
    div.appendChild(text);
    
    const parent = document.querySelector('.container');
    const form = document.querySelector('#add-book');

    parent.insertBefore(div, form);

    // remove after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2500);
}

UI.prototype.deleteBook = function(target) {
    // only listen to the '.delete' el with event delegation
    if(target.className.includes('delete')) {
        target.parentElement.parentElement.remove();
    }
}

// Event listeners
document.getElementById('add-book').addEventListener('submit', 
    function(e) {
    // form values
    const title = document.getElementById('book-title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    
    // construct a new book
    const book = new Book(title, author, isbn);

    // construct the UI
    const ui = new UI();

    // Validate the form
    if(title.trim() === '' || author.trim() === '' || isbn.trim() === '') {
        // error alert
        ui.showAlert('Please fill in all fields.', 'error');
    } else {
        // Add book to the table
        ui.addBookToTable(book);

        // show success
        ui.showAlert('Book added!', 'success');

        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',
    function(e) {
        const ui = new UI();

        ui.deleteBook(e.target);
        ui.showAlert('Book deleted.', 'success');
        e.preventDefault();
    }
);