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

install morgan
1. npm i morgan

to run this program go open the page on 
localhost:9000/inventoryItems then enter to get all the items,
http://localhost:9000/inventoryItems/search/type?type=drink to get the items for the type of drink only
http://localhost:9000/inventoryItems/search/type?type=electronic to get the items for the type of electronic only
http://localhost:9000/inventoryItems/search/type?type=storage to get the items for the type of storage only
http://localhost:9000/inventoryItems/search/type?type= to get an error message.
any error you see a message.
you can do the same exact steps in the postman


Complete Assignment: Thing Finder
For this assignment, you will create a server with a GET route that is able to return data including filtering results based on URL query parameters.
Follow the steps below. 
Choose a thing/noun of any kind, then write an express server with a GET route that sends back an array of that thing.
Your GET endpoint should be able to check for any query parameters that may have been passed into the url of the request and filter the results based on those query parameters.
For example, let's say I chose "fruit" as my noun. A GET request to http://localhost:8000/fruit would return an array with all fruits on my server (use an array to store the fruits, and you may want to hard code a few in there so you have some data to work with when the server restarts itself).
However, a GET request to http://localhost:8000/fruit?type=banana should filter out any fruits in the array that don't have a type of banana and return an array to me (in Postman, Angular, or whatever front end I'm using) with only the objects with a type of banana.
For the purposes of this exercise, you can write your server code with the assumption that there is only one query parameter option available. So in the above example, I can write my server's GET route to only filter if req.query.type isn't undefined.
*/



const express = require("express");
const app = express();
const morgan = require("morgan");


// Middleware - A function that fires on the inbetween for every route
app.use(morgan("dev")) // Logs request to the console 
app.use(express.json()); // Looks for a request body, and turns it into "req.body"

//Routes
app.use("/things", require("./routes/thingRouter"))
// telling app to listen to port with callback function showing it is in fact working.

// Error Hndling
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
});


app.listen(9000, () => {
  console.log("App is listening on port 9000!");
});