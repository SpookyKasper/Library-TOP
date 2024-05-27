
const myLibrary = []

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
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

let coolBook = new Book('Dark Materials', 'Philip Pullman')
let lameBook = new Book('Lamo', 'Boring Boris')

myLibrary.push(coolBook)
myLibrary.push(lameBook)

// addBookToLibrary()

const libraryEl = document.querySelector('.library')

myLibrary.forEach((book) => {
  let titleEl = document.createElement('span')
  titleEl.textContent = `Title: ${book.title}`
  titleEl.className = 'title'

  let authorEl = document.createElement('span')
  authorEl.textContent = `Author: ${book.author}`
  authorEl.className = 'author'

  let bookEl = document.createElement('div')
  bookEl.className = 'book'
  bookEl.appendChild(titleEl)
  bookEl.appendChild(authorEl)
  libraryEl.appendChild(bookEl)
})
