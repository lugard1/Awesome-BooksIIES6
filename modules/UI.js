import Bookstore from './Bookstore.js';

export default class UI {
  static addBook(book) {
    const bookshelf = document.getElementById('bookshelf');
    const ul = document.createElement('ul');
    ul.classList.add('unorderedList');
    ul.innerHTML = `
    <p class="bookTitle"><b>${book.title}</b></p>
        <p>by&nbsp${book.author}.</b></p>
        <button class="delete">Remove</button>
        `;
    bookshelf.appendChild(ul);
  }

  static removeBook(element) {
    if (element.classList.contains('delete')) {
      element.parentElement.remove();
    }
  }

  static displayBooks() {
    const books = Bookstore.getBooks();
    books.forEach((book) => {
      UI.addBook(book);
    });
  }
}
