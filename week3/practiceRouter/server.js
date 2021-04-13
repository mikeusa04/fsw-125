const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

const bookRouter = require('./routes/bookRouter');
const tvShowRouter = require('./routes/tvShowRouter');

const PORT = 3000;

//middleware
app.use(express.json())

//routes
app.use('/books', bookRouter)
app.use('/tv-shows', tvShowRouter)

//server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})