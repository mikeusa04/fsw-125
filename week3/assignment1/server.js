/* install uuid 
1. go to the folder where you want to install it
2. open its terminal
3. npm i uuid

A. Server Setup
Since we haven't started connecting to MongoDB quite yet, you can just save your bounties in a bounties array in your server code. Keep in mind that since it isn't being persisted anywhere, anytime you make a change to your server code and restart the server, you'll lose all your bounties.
A bounty object should have:
First Name
Last Name
Living (Boolean)
Bounty Amount (number)
Type (‘Sith’ or ‘Jedi’)
ID (a unique identifier. Use the uuid package to generate unique ids. - npm install uuid and check the docs (Links to an external site.) to see how to use it. It's as simple as requiring the package and running uuid.v4())
Since there isn't a front end set up yet, you'll just use Postman to interact with the server and update the data.
B. Create GET & POST routes
Since we don't have a good way to tell the server which item we want to PUT and DELETE yet, we'll start out just by writing the GET and POST endpoints.
Using Express, create an API  /bounty route
Write a GET endpoint that gets all bounties from the array and sends them to the client.
Write a POST endpoint that adds a new bounty object to the array of bounties.
Remember, you'll have to play the part of the database and add an id property to the incoming bounty before saving it to the array of bounties. This way you'll be able to easily look it up by its id property in order to update and delete it later.*/



const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

const PORT = 4000;

//Middleware
app.use(express.json())

//fake data
let bounties = [
    { FirstName: 'Mike', LastName: 'Saleh', Living: true, BountyAmount: 4, Type: 'Jedi', _id: uuidv4() },
    { FirstName: 'Zeezee', LastName: 'Smith', Living: false, BountyAmount: 10, Type: 'Sith', _id: uuidv4() },
    { FirstName: 'Sam', LastName: 'Gary', Living: true, BountyAmount: 7, Type: 'Sith', _id: uuidv4() },
    { FirstName: 'Alexa', LastName: 'Teranto', Living: false, BountyAmount: 2, Type: 'Jedi', _id: uuidv4() },
];


// GET all route
app.get('/bounty', (req, res) => {
    res.send(bounties)
})


//POST to add new resource or item to our array if the item has id
app.post('/bounty', (req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);

    console.log(bounties);
    console.log('successfully added')
    res.send(`Successfully added ${newBounty.FirstName} to the database`)
})


/* this is to add witout id
//POST to add new resource or item to our array if the item has no id
app.post('/bounty', (req, res) => {
    const newBounty = req.body;
    bounties.push(newBounty);

    console.log(bounties);
    res.send(`Successfully added ${newBounty.FirstName} to the database`)
})*/

app.listen(PORT, () => {
    console.log('our first server')
})