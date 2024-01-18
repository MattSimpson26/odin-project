# Book Library

What I am learning:

- Constructor Functions
- Classes
- Object Prototypes

## Initial Task

"Write a constructor for making “Book” objects. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book. Put a function in the constructor so that when called, it returns a string of the information."

## My Solution

```JavaScript

function Book(title, author, numOfPages, bookRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.bookRead = bookRead
  this.info = () => {
    return title + ", " + author + ", " + numOfPages.toString() + " pages," + bookRead;
  };
}

```

This constructor function receives the inputs of title, author, number of pages and if the book has been read and stores them in a JavaScript object. It also contains a function `.info()` that when called on a book, returns this information in the form of a string.

```JavaScript

const meditations = new Book("Meditations", "Marcus Aurelius", 240, "Yes");
meditations.info();
//Returns "Meditations, Marcus Aurelius, 240 pages, Yes"

```

## Further Learning Points

To improve code efficiency as well as readability, we can also declare the method in the _prototype_ instead of within the constructor:

```JavaScript

//The rest of the constructor stays the same
function Book(title, author, numOfPages, bookRead) {
  this.title = title;
  this.author = author;
  this.numOfPages = numOfPages;
  this.bookRead = bookRead
}

//But we move the .info method onto the object prototype.
Book.prototype.info = function () {
  return `${this.title}, ${this.author}, ${this.numOfPages} pages, ${this.bookRead}`;
};

```

The constructor function can instead be written as a class:

```JavaScript

class Book {
  constructor(title, author, numOfPages, bookRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.bookRead = bookRead;
  }
  info() {
      return `${this.title}, ${this.author}, ${this.numOfPages.toString()} pages, ${this.bookRead}`;
    };
}

```

Classes is just another way of writing constructor functions, it is syntactical sugar. To helps to improve readability of the code. Within the class, but outside of the constructor, we can define our methods, this this the same as defining them on the prototype.

## Useful Information

- [JavaScript Visualized: Prototypal Inheritance](https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co) by Lydia Hallie
- [Understanding Prototypes and Inheritance in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript) by Digital Ocean
- [Javascript Tutorial | Prototype Inheritance | Ep24](https://www.youtube.com/watch?v=sOrtAjyk4lQ) video on Youtube

## Project

Extend the initial book task to create a small library. All of your books are going to be stored in an array and you need to create a function that loops through that array and displays each book on the page. A "new book" button is needed to that when clicked, a form appears which allows the user to input another book. Each book displayed needs a "delete" button to remove it as well as a "read" button that toggles the read status of the book.
