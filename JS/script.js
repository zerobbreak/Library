class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false; // Default value for read status
  }

  toggleReadStatus() {
    this.read = !this.read;
  }
}

class LibraryApp {
  constructor() {
    this.myLibrary = [];
    this.setupEventListeners();
    this.displayCards();
  }

  setupEventListeners() {
    document.getElementById("addBook").addEventListener("click", this.addBookToLibrary.bind(this));
    document.getElementById("popupButton").addEventListener("click", this.showPopup);
    document.getElementById("closeButton").addEventListener("click", this.closePopup);

    document.getElementById("display-grid__container").addEventListener("change", (event) => {
      if (event.target.matches("#read-confirmation")) {
        this.displayCards();
      }
    });
  }

  clearForm() {
    document.getElementById("input-title").value = "";
    document.getElementById("input-author").value = "";
    document.getElementById("input-number").value = "";
  }

  addBookToLibrary(event) {
    event.preventDefault();
    const title = document.getElementById("input-title").value;
    const author = document.getElementById("input-author").value;
    const pages = document.getElementById("input-number").value;
    const isRead = document.getElementById("read-confirmation").checked;

    if (title.trim() === "" || author.trim() === "" || pages.trim() === "") {
      return; // Do not add empty books
    }

    const book = new Book(title, author, pages);
    book.read = isRead;
    this.myLibrary.push(book);

    this.clearForm();
    this.displayCards();
    this.closePopup();
  }

  showPopup() {
    document.getElementById("popup").style.display = "block";
  }

  closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  removeBook(event) {
    const index = event.target.dataset.index;
    this.myLibrary.splice(index, 1);
    this.displayCards();
  }

  displayCards() {
    const cardsContainer = document.getElementById("display-grid__container");
    cardsContainer.innerHTML = ""; // Clear previous cards

    this.myLibrary.forEach((book, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <h2>Title: ${book.title}</h2>
        <h3>Author: ${book.author}</h3>
        <p>${book.pages} pages</p>
        <div class="flex">
          <span class="read-button ${book.read ? "read-button--active" : "read-button--not-read"}" data-index="${index}">${book.read ? "Read" : "Not Read"}</span>
          <button class="remove-button" data-index="${index}">Remove</button>
        </div>
      `;

      const readButton = card.querySelector(".read-button");
      if (book.read && document.getElementById("read-confirmation").checked) {
        readButton.classList.remove("read-button--not-read");
        readButton.classList.add("read-button--active");
      } else if (!book.read) {
        readButton.classList.remove("read-button--active");
        readButton.classList.add("read-button--not-read");
      }

      readButton.addEventListener("click", (event) => {
        this.toggleReadStatus(event, index);
      });

      card.querySelector(".remove-button").addEventListener("click", this.removeBook.bind(this));

      cardsContainer.appendChild(card);
    });
  }

  toggleReadStatus(event, index) {
    this.myLibrary[index].toggleReadStatus();
    this.displayCards();
  }
}

const app = new LibraryApp();
