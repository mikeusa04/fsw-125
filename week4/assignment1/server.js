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


const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');

const PORT = 4000;

//Middleware
app.use(express.json())

//fake data
let bounties = [
    { FirstName: 'Mike', LastName: 'Saleh', isAlive: true, BountyAmount: 4, Type: 'Jedi', _id: uuidv4() },
    { FirstName: 'Zeezee', LastName: 'Smith', isAlive: false, BountyAmount: 10, Type: 'Sith', _id: uuidv4() },
    { FirstName: 'Sam', LastName: 'Gary', isAlive: true, BountyAmount: 7, Type: 'Sith', _id: uuidv4() },
    { FirstName: 'Alexa', LastName: 'Teranto', isAlive: false, BountyAmount: 2, Type: 'Jedi', _id: uuidv4() },
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

//DELETE an item
app.delete('/bounty/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
    bounties.splice(bountyIndex, 1);

    res.send('Resource successfully deleted');
})

//PUT 
app.put('/bounty/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
    const updatedBountyResource = Object.assign(bounties[bountyIndex], req.body);

    res.send(`Resource successfully updated to ${updatedBountyResource}`);
})

app.listen(PORT, () => {
    console.log('our first server')
})