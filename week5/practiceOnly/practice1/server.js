/*in order to make this program work you have to install express.js, go to
1. assignment1 folder, open its terminal
2. npm init -y then hit enter
3. in the new path type 
4. npm i express then hit enter

now install nodemon.js
1. same assignment1 folder, open its terminal
2. npm install nodemon then hit enter

now everytime you want to run the program go to
1. open its terminal
2. nodemon then the file name like (nodemon server.js then enter)

install uuid 
1. go to the folder where you want to install it
2. open its terminal
3. npm i uuid

install react
1.npx create-react-app my-app

install boolean
1. npm i boolean

install morgan
1. npm i morgan

go to client folder and install axios 
1. npm i axios
*/

const express = require('express');
const morgan = require('morgan');

const bookRouter = require('./routes/bookRouter');
const tvShowRouter = require('./routes/tvShowRouter');

const app = express(); 
const PORT = 9000;

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/books', bookRouter)
app.use('/tv-shows', tvShowRouter)

//server startup logic
app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
})