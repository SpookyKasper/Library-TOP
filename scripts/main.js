
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

let coolBook = new Book('Dark Materials', 'Philip Pullman')
myLibrary.push(coolBook)
addBookToLibrary()

console.log(myLibrary)
myLibrary.forEach((book) => {
  console.log(book)
})
