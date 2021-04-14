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

install boolean
1. npm i boolean

Since you have now learned about req.params, add endpoints on the /bounty route that allow you to:
DELETE a bounty from the bounties array, and
PUT (update) an existing bounty.
You'll need to pass the uuid you added when POSTing new bounties as a URL Parameter to the endpoint in order to have a reference to the object you want to update or delete.
*/


const express = require('express') // Importing Express
const app = express() // Declaring Server Variable
const morgan = require('morgan'); // Importing Morgan, npm i morgan
const boolParser = require('express-query-boolean');  // Installing Express-Query-Boolean, npm i express-query-boolean

// Importing Router from routes
const bountyRouter = require('./routes/bountyRouter');

// Middleware (for every request) // Looks For A Request Body, And Turns It Into 'req.body'
app.use(express.json())
app.use(morgan('dev')); // Logs Request To The Console
app.use(boolParser());

// ---------------------------------------------------------------- Setting More Middle Ware
app.use('/bounties', bountyRouter);

//  ---------------------------------------------------------------------------------Two Arguments: PORT, CB
app.listen(9000, () => {
    console.log('The Server Is Listening') // Server Is Set To Listen
})