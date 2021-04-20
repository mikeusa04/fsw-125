/*For this part you will have to set up a full stack React application (Links to an external site.). Since you do not have a database yet, ignore the /models folder contained in the example. You instead will have something like bountyData.js which contains your data.
Build a client-side React interface for the server you created!
Your app should be a CRUD application - it should be able to: 
Create (POST) new bounties
Read (GET) existing bounties and show them to the user of your site
Update (PUT) existing bounties (e.g. if you wanted to up the price for a bounty)
Delete (DELETE) bounties from the list of all bounties.
You will need to use everything you've learned about state management, HTTP, and forms!
The design is up to you, so have fun with it!
-------------------------------------------------------------------------------------------------------------------

install React in client directory
1. npx create-react-app my-app

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

install boolean
1. npm i boolean

install morgan
1. npm i morgan

go to client folder and install axios 
1. npm i axios

go to package.json in client folder 
1.go all the down
2.put proxy like this
 },
 "proxy": "http://localhost:9000"
} 
*/


const express = require('express'); // Importing Express
const app = express(); // Declaring Server Variable
const morgan = require('morgan'); // Importing Morgan, npm i morgan
//const boolParser = require('express-query-boolean');  // Installing Express-Query-Boolean, npm i express-query-boolean

// Importing Router from routes
const bountyRouter = require('./routes/bountyRouter');
const todoRouter = require('./routes/todoRouter');


// Middleware (for every request) // Looks For A Request Body, And Turns It Into 'req.body'
    app.use(express.json());
    app.use(morgan('dev')); // Logs Request To The Console
    //app.use(boolParser());

// ---------------------------------------------------------------- Server Imports
app.use('/bounties', bountyRouter);
app.use('/todo', todoRouter);
// ------------------------------------------------------------------- Server Is Set To Listen
//  -------------------Two Arguments: PORT, CB
app.listen(9000, () => {
    console.log('The Server Is Listening'); 
})