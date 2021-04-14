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


/*this is to add without id
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