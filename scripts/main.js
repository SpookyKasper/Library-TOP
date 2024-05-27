
const myLibrary = []

const libraryEl = document.querySelector('.library')
const dialogEl = document.querySelector('dialog')
const dialogFormEl = document.querySelector('.dialog-form')
const dialogConfirmBtn = document.getElementById('confirmBtn')
const addBookBtn = document.getElementById('addBookBtn')

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

function createBookEl() {
  let bookEl = document.createElement('div')
  bookEl.className = 'book'
  return bookEl
}

function addBookToDOM(book) {
  let bookEl = createBookEl()
  for (let [key, value] of Object.entries(book)) {
    let propertyEl = document.createElement('span')
    propertyEl.className = key
    propertyEl.textContent = `${key}: ${value}`
    bookEl.appendChild(propertyEl)
  }
  libraryEl.appendChild(bookEl)
}

let coolBook = new Book('Dark Materials', 'Philip Pullman')
let lameBook = new Book('Lamo', 'Boring Boris')

myLibrary.push(coolBook)
myLibrary.push(lameBook)

addBookBtn.addEventListener('click', () => {
  dialogEl.show()
})

dialogConfirmBtn.addEventListener('click', (e) => {
  e.preventDefault()
  addBookToLibrary()
  dialogEl.close()
})

myLibrary.forEach((book) => {
  addBookToDOM(book)
})

