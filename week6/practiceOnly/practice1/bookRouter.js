// Error Handling

const express = require('express');
const { nextTick } = require('node:process');
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
            res.status(200)
            res.send(books)
            // or combined both res.status(200).send(books)
        })  //GET all

        .get('/:bookId', (req, res) => {
            const bookId = req.params.bookId;
            const singularBook = books.find(book => book._id === bookId);

            //updating here
            if (!singularBook) {
                const error = new Error("This item was not found");
                return next(error);
            }

            res.status(200).send(singularBook);
        })  //GET one using params

        .get('/search/genre', (req, res) => {
            const bookGenre = req.query.genre;
            const filteredBooks = books.filter(book => book.genre === bookGenre);

            res.status(200).send(filteredBooks);
        })  //GET by genre

        .post('/', (req, res) => {
            const newBook = req.body;
            newBook._id = uuidv4();
            books.push(newBook);

            
            res.status(201).send(newBook)
        })  //POST one

        .delete('/:bookId', (req, res) => {
            const bookId = req.params.bookId;
            const bookIndex = books.findIndex(book => book._id === bookId);
            books.splice(bookIndex, 1);

            res.send('Resource successfuly deleted')
        })  //DELETE one

        .put('/:bookId', (req, res) => {
            const bookId = req.params.bookId;
            const bookIndex = books.findIndex(book => book._id === bookId);
            const updatedBookResource = Object.assign(books[bookIndex], re.body);

            res.status(201).send(`Resource successfully updated to ${updatedBookResource}`)
        })  //PUT one

module.exports = bookRouter;