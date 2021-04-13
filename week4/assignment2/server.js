const express = require('express'); // Importing Express
const app = express(); // Declaring Server Variable
const morgan = require('morgan'); // Importing Morgan, npm i morgan
const boolParser = require('express-query-boolean');  // Installing Express-Query-Boolean, npm i express-query-boolean

// Importing Router from routes
const bountyRouter = require('./routes/bountyRouter');
const todoRouter = require('./routes/todoRouter');


// Middleware (for every request) // Looks For A Request Body, And Turns It Into 'req.body'
    app.use(express.json());
    app.use(morgan('dev')); // Logs Request To The Console
    app.use(boolParser());

// ---------------------------------------------------------------- Server Imports
app.use('/bounties', bountyRouter );
app.use('/todo', todoRouter);
// ------------------------------------------------------------------- Server Is Set To Listen
//  -------------------Two Arguments: PORT, CB
app.listen(9000, () => {
    console.log('The Server Is Listening'); 
})