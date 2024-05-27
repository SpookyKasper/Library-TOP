
const myLibrary = []
const libraryEl = document.querySelector('.library')

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
  }
}

function addBookToLibrary() {
  let title = prompt('Type book title')
  let author = prompt('Type book author')
  myLibrary.push(new Book(title, author))
}

function createBookElement() {
  let bookEl = document.createElement('div')
  bookEl.className = 'book'
  return bookEl
}

function addBookToDOM(book) {
  let bookEl = createBookElement()
  for (let [key, value] of Object.entries(book)) {
    let propertyEl = document.createElement('span')
    propertyEl.className = key
    propertyEl.textContent = `${key} ${value}`
    bookEl.appendChild(propertyEl)
  }
  libraryEl.appendChild(bookEl)
}

let coolBook = new Book('Dark Materials', 'Philip Pullman')
let lameBook = new Book('Lamo', 'Boring Boris')

myLibrary.push(coolBook)
myLibrary.push(lameBook)

myLibrary.forEach((book) => {
  addBookToDOM(book)
})
