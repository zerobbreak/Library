const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = false; // Default value for read status
}

// Move the toggleReadStatus function to Book's prototype
Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};

function setupEventListeners() {
  document.getElementById("addBook").addEventListener("click", addBookToLibrary);
  document.getElementById("popupButton").addEventListener("click", showPopup);
  document.getElementById("closeButton").addEventListener("click", closePopup);

  document.getElementById("display-grid__container").addEventListener("change", (event) => {
    if (event.target.matches("#read-confirmation")) {
      displayCards();
    }
  });
}

function clearForm() {
  document.getElementById("input-title").value = "";
  document.getElementById("input-author").value = "";
  document.getElementById("input-number").value = "";
}

function addBookToLibrary(event) {
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
  myLibrary.push(book);

  clearForm();
  displayCards();
  closePopup();
}

function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function removeBook(event) {
  const index = event.target.dataset.index;
  myLibrary.splice(index, 1);
  displayCards();
}

function displayCards() {
  const cardsContainer = document.getElementById("display-grid__container");
  cardsContainer.innerHTML = ""; // Clear previous cards

  myLibrary.forEach((book, index) => {
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

    // Set the background color based on the book's read status and checkbox state
    const readButton = card.querySelector(".read-button");
    if (book.read && document.getElementById("read-confirmation").checked) {
      readButton.classList.remove("read-button--not-read");
      readButton.classList.add("read-button--active");
    } else if (!book.read) {
      readButton.classList.remove("read-button--active");
      readButton.classList.add("read-button--not-read");
    }

    readButton.addEventListener("click", function (event) {
      toggleReadStatus(event, index);
    });

    card.querySelector(".remove-button").addEventListener("click", removeBook);

    cardsContainer.appendChild(card);
  });
}

function toggleReadStatus(event, index) {
  myLibrary[index].toggleReadStatus();
  displayCards();
}

setupEventListeners();
displayCards();
