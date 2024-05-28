
const myLibrary = []

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

function createRemoveBookBtn() {
  let buttonEl = document.createElement('button')
  buttonEl.className = 'remove-book-btn'
  buttonEl.textContent = 'X'
  buttonEl.addEventListener(('click'), function() {
    console.log(this)
  })
  return buttonEl
}

function addBookToDOM(book) {
  let bookEl = createBookEl(book)
  console.log(bookEl.dataset)
  let removeBookBtn = createRemoveBookBtn()
  for (let [key, value] of Object.entries(book)) {
    let propertyEl = document.createElement('span')
    propertyEl.className = key
    propertyEl.textContent = `${key}: ${value}`
    bookEl.appendChild(propertyEl)
  }
  bookEl.appendChild(removeBookBtn)
  libraryEl.appendChild(bookEl)
}

const myCoolBook = new Book('Dark Material', 'Philip Pullman', 1200, 'Yes')
const myLameBook = new Book('Lamo Lame', 'Boris Boring', 3250, 'No')

myLibrary.push(myCoolBook)
myLibrary.push(myLameBook)

console.log(myLibrary.length)
// given a button in a book element
// get the value of the data-library-index
// remove the element from the dom
// remove the book at that index from the library

function removeBook(book) {
}

addBookBtn.addEventListener('click', () => {
  dialogEl.show()
})

dialogConfirmBtn.addEventListener('click', (e) => {
  e.preventDefault()
  addBookToLibrary()
  dialogEl.close()
})


function displayBooks() {
  myLibrary.forEach((book) => {
  addBookToDOM(book)
})
}

displayBooks()
