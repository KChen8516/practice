// Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    constructor () {}

    addBookToTable(book) {
        // Create a row el
        const row = document.createElement('tr');
        // Populate the row
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
        // Add the new row to the book list
        const bookList = document.getElementById('book-list');
        bookList.appendChild(row);
    }

    clearFields() {
        document.getElementById('book-title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

    showAlert(msg, className) {
        // Create the alert el
        const div = document.createElement('div');
        div.className = `alert ${className}`;

        // Add the textContent, or create and append a textNode
        div.textContent = msg;

        // Add the alert above the form el
        const parent = document.querySelector('.container');
        const form = document.getElementById('add-book');

        parent.insertBefore(div, form);

        // Remove the alert after 2.5 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2500);
    }

    removeBookFromList(target) {
        // check for the right element
        if(target.className.includes('delete')) {
            // delete the parent parent element
            target.parentElement.parentElement.remove();

            this.showAlert('Deleted book.', 'success');
        }
    }
}

document.querySelector('#add-book').addEventListener('submit', e => {
    // form values
    const title = document.getElementById('book-title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    
    // Create a Book
    const book = new Book(title, author, isbn);

    // Add the Book to the table
    const ui = new UI();

    // Validate input
    // empty values
    if(title.trim() === '' || author.trim() === '' || isbn.trim() === '') {
        // Show error
        ui.showAlert('Please fill in all fields.', 'error');
    } else {
        ui.addBookToTable(book);

        ui.showAlert('Book added!', 'success');

        ui.clearFields();
    }

    e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', e => {
    const ui = new UI();
    ui.removeBookFromList(e.target);
    e.preventDefault();
});