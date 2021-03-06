const express = require('express');
const bookRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

//fake data
let books = [
    { title:'Devil And The White City', author:'Erik Larson', genre: 'science fiction', _id: uuidv4() },
    { title:'Le Transperceneige', author:'Jaques Lob', genre: 'science fiction', _id: uuidv4() },
    { title:'American Gods', author:'Neil Gaiman', genre: 'science fiction', _id: uuidv4() },
    { title:'Active Imagination', author:'Carl Jung', genre: 'philosophy', _id: uuidv4() },
];

//routes
bookRouter
        .get('/', (req, res) => {
            res.send(books)
        })  //GET all

        .get('/:bookId', (req, res) => {
            const bookId = req.params.bookId;
            const singularBook = books.find(book => book._id === bookId);

            res.send(singularBook);
        })  //GET one using params

        .get('/search/genre', (req, res) => {
            const bookGenre = req.query.genre;
            const filteredBooks = books.filter(book => book.genre === bookGenre);

            res.send(filteredBooks);
        })  //GET by genre

        .post('/', (req, res) => {
            const newBook = req.body;
            newBook._id = uuidv4();
            books.push(newBook);

            
            res.send(newBook)
        })  //POST one

        .delete('/:bookId', (req, res) => {
            const bookId = req.params.bookId;
            const bookIndex = books.findIndex(book => book._id === bookId);
            books.splice(bookIndex, 1);

            res.send('Resource successfuly deleted')
        })  //DELETE one

        .put('/:bookId', (req, res) => {
            const bookId = req.params.bookId;
            const updateObject = req.body
            const bookIndex = books.findIndex(book => book._id === bookId);
            const updatedBookResource = Object.assign(books[bookIndex], updateObject);

            res.send(updatedBookResource)
        })  //PUT one

module.exports = bookRouter;     