import Book from './modules/Book.js';
import UI from './modules/UI.js';
import Bookstore from './modules/Bookstore.js';
import { DateTime } from './modules/luxon.js';

// Date and Time

const dateTime = () => {
  let dateTime = DateTime.now();
  dateTime = dateTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  document.querySelector('#current-date-time').innerHTML = dateTime;
};

setInterval(dateTime, 1000);

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  const book = new Book(title, author);
  UI.addBook(book);
  Bookstore.addBook(book);

  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  UI.displayBooks();
});

document.getElementById('bookshelf').addEventListener('click', (event) => {
  UI.removeBook(event.target);
  Bookstore.removeBook(
    event.target.previousElementSibling.previousElementSibling.textContent,
  );
});

// single-page display

const list = document.getElementById('list-link');
const bookList = document.getElementById('display-books');
const formContainer = document.getElementById('form-input');
const contactInfo = document.getElementById('our-contact');

list.addEventListener('click', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

window.addEventListener('load', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

// display the Add book form  when click the button "Add new"
const addNewBtn = document.getElementById('new-link');

addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

// display the  Contact section when click the button "Contact"

const contactBtn = document.getElementById('contact-link');

contactBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'block';
});
