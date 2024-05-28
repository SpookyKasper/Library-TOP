
const libraryEl = document.querySelector('.library')
const dialogEl = document.querySelector('dialog')
const dialogFormEl = document.querySelector('.dialog-form')
const dialogConfirmBtn = document.getElementById('confirmBtn')
const addBookBtn = document.getElementById('addBookBtn')
const removeBookBtn = document.querySelector('.remove-book-btn')

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
  }
}

const myLibrary = []
const myCoolBook = new Book('Dark Material', 'Philip Pullman', 1200, 'Yes')
const myLameBook = new Book('Lamo Lame', 'Boris Boring', 3250, 'No')

myLibrary.push(myCoolBook)
myLibrary.push(myLameBook)

function addBookToLibrary() {
  let book = new Book()
  formEls = dialogFormEl.elements
  for(let el of formEls) {
    property = el.id
    if (book.hasOwnProperty(property)) {
      book[property] = el.value
    }
  }
  myLibrary.push(book)
  addBookToDOM(book)
}

function createBookEl(book) {
  let bookEl = document.createElement('div')
  bookEl.dataset.libraryIndex = myLibrary.indexOf(book)
  bookEl.className = 'book'
  return bookEl
}

function createRemoveBookBtn(bookEl) {
  let buttonEl = document.createElement('button')
  buttonEl.className = 'remove-book-btn'
  buttonEl.textContent = 'X'
  buttonEl.addEventListener(('click'), () => {
    myLibrary.splice(bookEl.dataset.libraryIndex, 1)
    libraryEl.removeChild(bookEl)
    displayBooks()
  })
  return buttonEl
}

function addBookToDOM(book) {
  let bookEl = createBookEl(book)
  let removeBookBtnEl = createRemoveBookBtn(bookEl)
  for (let [key, value] of Object.entries(book)) {
    let propertyEl = document.createElement('span')
    propertyEl.className = key
    propertyEl.textContent = `${key}: ${value}`
    bookEl.appendChild(propertyEl)
  }
  bookEl.appendChild(removeBookBtnEl)
  libraryEl.appendChild(bookEl)
}

console.log(myLibrary.length)

// given a button in a book element
// get the value of the data-library-index
// remove the element from the dom
// remove the book at that index from the library
// change the index of the books

function removeBook(book) {
}

// Display form to add a book
addBookBtn.addEventListener('click', () => {
  dialogEl.show()
})

// Confirm book creation
dialogConfirmBtn.addEventListener('click', (e) => {
  e.preventDefault()
  addBookToLibrary()
  dialogEl.close()
})

function displayBooks() {
  libraryEl.innerHTML = ''
  myLibrary.forEach((book) => {
  addBookToDOM(book)
})
}

displayBooks()
