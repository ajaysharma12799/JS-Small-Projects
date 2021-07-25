// Book Class => Represent Book Class
class Book {
    constructor(bookName, authorName, bookISBN, bookPrice) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.bookISBN = bookISBN;
        this.bookPrice = bookPrice;
    }
}

// UI Class => Handle UI Task
class UI {
    static displayBook() {
        const books = Storage.getBook();
        books.forEach(book => UI.addBookToList(book));
    }
    static addBookToList(book) {
        const { bookName, authorName, bookISBN, bookPrice } = book;
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("bookCard");
        const ul = document.createElement("ul");
        ul.classList.add("card");
        ul.innerHTML = `
            <li>${bookName}</li>
            <li>${authorName}</li>
            <li>${bookISBN}</li>
            <li>${bookPrice}</li>
            <div class="delete"> <i class="far fa-trash-alt"></i> </div>
        `;
        parentDiv.append(ul);
        document.querySelector(".outputContainer").insertAdjacentElement("afterbegin", parentDiv);
    }

    static deleteBook(element) {
        if(element.classList.contains("far")) {
            element.parentElement.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(message));
        div.className = `${className} alert`

        document.querySelector(".container").insertAdjacentElement("beforebegin", div);
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }

    static clearFields() {
        document.querySelector(".bookName").value = "";
        document.querySelector(".authorName").value = "";
        document.querySelector(".bookISBN").value = "";
        document.querySelector(".bookPrice").value = "";
    }
}

// Store Class => Handle Storage Task
class Storage {
    static getBook() {
        let books;
        if(localStorage.getItem("books") === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static addBook(book) {
        const books = Storage.getBook();
        books.push(book);
        localStorage.setItem("books", JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Storage.getBook();
        books.forEach((book, index) => {
            if(book.bookISBN === isbn) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem("books", JSON.stringify(books));
    }
}

// Event => Display Book
document.addEventListener("DOMContentLoaded", UI.displayBook);

// Event => Add Book
document.querySelector(".submitButton").addEventListener("click", function() {
    let bookName = document.querySelector(".bookName").value;
    let authorName = document.querySelector(".authorName").value;
    let bookISBN = document.querySelector(".bookISBN").value;
    let bookPrice = document.querySelector(".bookPrice").value;
    if(bookName === "" || authorName === "" || bookISBN === "" || bookPrice === "") {
        // Show Error Alert
        UI.showAlert("Enter Fields", "error");
    }
    else {
        // Create Book Object
        const book = new Book(bookName, authorName, bookISBN, bookPrice);

        // Add Book to UI
        UI.addBookToList(book);

        // Add Book to Storage
        Storage.addBook(book);

        // Show Success Alert
        UI.showAlert("Book Added Successfully", "success");

        // Clear Fields
        UI.clearFields();
    }
});

// Event => Delete Book
document.querySelector(".outputContainer").addEventListener("click", function(e) {
    // Show Delete Book
    UI.deleteBook(e.target);

    // Remove Book From Storage
    Storage.removeBook(e.target.parentElement.parentElement.children[2].textContent);

    // Show Delete Alert
    UI.showAlert("Book Deleted Successfully", "success");
});