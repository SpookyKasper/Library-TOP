const libraryEl = document.querySelector(".library");
const dialogEl = document.querySelector("dialog");
const dialogFormEl = document.querySelector(".dialog-form");
const dialogConfirmBtn = document.getElementById("confirmBtn");
const addBookBtn = document.getElementById("addBookBtn");
const removeBookBtn = document.querySelector(".remove-book-btn");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = toggleYesNo(this.read);
  }
}

const myLibrary = [];
const myCoolBook = new Book("Dark Material", "Philip Pullman", 1200, "Yes");
const myLameBook = new Book("Lamo Lame", "Boris Boring", 3250, "No");

myLibrary.push(myCoolBook);
myLibrary.push(myLameBook);

function addBookToLibrary() {
  let book = new Book();
  formEls = dialogFormEl.elements;
  for (let el of formEls) {
    property = el.id;
    if (book.hasOwnProperty(property)) {
      book[property] = el.value;
    }
  }
  myLibrary.push(book);
  addBookToDOM(book);
}

function createBookEl(book) {
  let bookEl = document.createElement("div");
  bookEl.dataset.libraryIndex = myLibrary.indexOf(book);
  bookEl.className = "book";
  return bookEl;
}

function createRemoveBookBtn(bookEl) {
  let buttonEl = document.createElement("button");
  buttonEl.className = "remove-book-btn";
  buttonEl.textContent = "X";
  buttonEl.addEventListener("click", () => {
    myLibrary.splice(bookEl.dataset.libraryIndex, 1);
    libraryEl.removeChild(bookEl);
    displayBooks();
  });
  return buttonEl;
}

function createToggleReadBtn(book, bookEl) {
  let toggleBtnEl = document.createElement("button");
  let readEl = bookEl.querySelector(".read");
  toggleBtnEl.className = "toggle-read-btn";
  toggleBtnEl.textContent = normalizeString(book.read);
  toggleBtnEl.addEventListener("click", () => {
    readEl.lastChild.textContent = normalizeString(
      toggleYesNo(readEl.lastChild.textContent)
    );
    book.toggleRead();
  });
  return toggleBtnEl;
}

function addBookToDOM(book) {
  let bookEl = createBookEl(book);
  addBookPropertiesToBookEl(book, bookEl);
  let readEl = bookEl.querySelector(".read");
  readEl.lastChild.innerHTML = "";
  let removeBookBtnEl = createRemoveBookBtn(bookEl);
  let toggleReadEl = createToggleReadBtn(book, bookEl);
  bookEl.appendChild(removeBookBtnEl);
  readEl.appendChild(toggleReadEl);
  libraryEl.appendChild(bookEl);
}

function addBookPropertiesToBookEl(book, bookEl) {
  for (let [key, value] of Object.entries(book)) {
    let bookDataRowEl = document.createElement("div");
    let bookDataKeyEl = document.createElement("span");
    let bookDataValueEl = document.createElement("span");
    bookDataRowEl.className = key;
    bookDataRowEl.classList.add("book-info-row");
    bookDataKeyEl.textContent = `${normalizeString(key)}: `;
    bookDataValueEl.textContent = normalizeString(value.toString());
    bookDataRowEl.appendChild(bookDataKeyEl);
    bookDataRowEl.appendChild(bookDataValueEl);
    bookEl.appendChild(bookDataRowEl);
  }
}

function toggleYesNo(value) {
  value = value.toLowerCase() === "yes" ? "no" : "yes";
  return value;
}

function normalizeString(string) {
  let firstLetter = string[0];
  let remaining = string.slice(1).toLowerCase();
  return `${firstLetter.toUpperCase()}${remaining}`;
}

// Display form to add a book
addBookBtn.addEventListener("click", () => {
  dialogEl.show();
  const inputFields = document.querySelectorAll("input");
  inputFields.forEach((field) => {
    field.value = "";
  });
});

// Confirm book creation
dialogConfirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  dialogEl.close();
});

function displayBooks() {
  libraryEl.innerHTML = "";
  myLibrary.forEach((book) => {
    addBookToDOM(book);
  });
}

displayBooks();
