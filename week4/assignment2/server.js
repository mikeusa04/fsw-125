/*Todos should have a data format similar to:

{
    name: 'the name',
    description: 'the description',
    todoImage: 'https://images.....',
    todoCompleted: false,
    _id: uuidv4()
},

Create endpoints that:
allows new todo items to be posted to the array,
When posting a new todo, you must generate a unique id for that todo (consider using the uuid npm package),
returns the entire list of todos,
allows the user to update a todo by its _id,
allows the user to delete a todo by its _id, and
allows the user to retrieve a single todo by its _id.

in order to make this program work you have to install express.js, go to
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
*/


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
app.use('/bounties', bountyRouter);
app.use('/todo', todoRouter);
// ------------------------------------------------------------------- Server Is Set To Listen
//  -------------------Two Arguments: PORT, CB
app.listen(9000, () => {
    console.log('The Server Is Listening'); 
})