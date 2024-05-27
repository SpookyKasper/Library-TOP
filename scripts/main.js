class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let coolBook = new Book('Dark Materials', 'Philip Pullman')

console.log(coolBook.author)
