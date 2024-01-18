function Book(title, author, numOfPages, bookRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.bookRead = bookRead;
  this.info = () => {
    return (
      title +
      ", " +
      author +
      ", " +
      numOfPages.toString() +
      " pages, " +
      bookRead
    );
  };
}

//To test:

const book = new Book("Meditations", "Marcus Aurelius", 240, "Yes");
console.log(book);
//should output --> Book {title: 'Meditations', author: 'Marcus Aurelius', numOfPages: 240, bookRead: Yes, info: ƒ}
console.log(book.info());
// should output --> Meditations, Marcus Aurelius, 240 pages, Yes

// The same constructor function as a class (more knowledge needed here 17/01)
class Book {
  constructor(title, author, numOfPages, bookRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.bookRead = bookRead;
    this.info = () => {
      return `${title}, ${author}, ${numOfPages.toString()} pages, ${bookRead}`;
    };
  }
}

//Instead of defining the method in the constructor, we can define it in the prototype:

Book.prototype.info = function () {
  return `${this.title}, ${this.author}, ${this.numOfPages} pages, ${this.bookRead}`;
};

//This increases code efficiency and readability.
