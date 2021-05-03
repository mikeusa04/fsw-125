/*in order to make this program work you have to install express.js, go to
client directory
1. npx create-react-app my-app

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

to run this program go client directory, open its terminal, cd my-app,type npm start then enter, go assignment1 open its terminal,
type nodemon server.js then enter
*/


const express = require('express'); // Importing Express
const app = express(); // Declaring Server Variable
const morgan = require('morgan'); // Importing Morgan, npm i morgan
//const boolParser = require('express-query-boolean');  // Installing Express-Query-Boolean, npm i express-query-boolean

// Importing Router from routes
const actorRouter = require('./routes/actorRouter');


// Middleware (for every request) // Looks For A Request Body, And Turns It Into 'req.body'
    app.use(express.json());
    app.use(morgan('dev')); // Logs Request To The Console
    //app.use(boolParser());

// ---------------------------------------------------------------- Server Imports
app.use('/actors', actorRouter);

//--------------------(catching the erroe that coming out of the routes)----------------Error Hndling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})// return means give us the err and stop excuting anything bellow that or after that
  })

// ------------------------------------------------------------------- Server Is Set To Listen
//  -------------------Two Arguments: PORT, CB
app.listen(9000, () => {
    console.log('The Server Is Listening'); 
})