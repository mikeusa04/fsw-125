import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Book from "./components/Book"
import BookFormHandler from "./components/BookFormHandler"

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    axios.get('/books')
    //.then(res => console.log(res))
    .then(res => setBooks(res.data))
    .catch(err => console.log(err))
  }

  const addBook = (newBook) => {
    axios.post('/books', newBook)
    //.then(res => console.log(res))
    .then(res => {
      setBooks(prevBooks => [...prevBooks, res.data])
    })
    .catch(err => console.log(err))
  }

  const deleteBook = (bookId) => {
    axios.delete(`/books/${bookId}`)
    .then(res => {
      setBooks(prevBooks =>prevBooks.filter(book => book._id !== bookId))
    })
    .catch(err => console.log(err))
  }

  const editBook = (updates, bookId) => {
    axios.put(`/books/${bookId}`, updates)
    .then(res => {
      setBooks(prevBooks => prevBooks.map(book => book._id !== bookId ? book : res.data))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getBooks();
  }, [])
  
  const booksList = books.map(book => 
      <Book 
         {...book} 
         deleteBook={deleteBook}
         editBook={editBook} 
         key={book.title} />)

  return (
    <div className="book-container">
      <BookFormHandler
         btnText='Add Book' 
         submit={addBook} />
      {booksList}
    </div>
  );
}

export default App;
