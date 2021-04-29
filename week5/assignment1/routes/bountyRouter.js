 //  ------------------------------------------------------------------ Importing Express
const express = require('express');

//  ------------------------------------------------------------------ Setting bountyRouter with express.Router()
const bountyRouter = express.Router();

//  ------------------------------------------------------------------ Using uuid To Set A Unique id
const  uuid = require('uuid');

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– Bounty Endpoint ––––––––––––––––––––––––––––––––––––––––––––––
const bounties = [
    {firstName: 'Anakin', lastName: 'Skywalker', living: true, bountyAmount: 54244574657654, type: 'Sith', _id: uuid.v4() },
    {firstName: 'Savage', lastName: 'Opress', living: true, bountyAmount: 80594564645, type: 'Sith', _id: uuid.v4() },
    {firstName: 'Dessel', lastName: 'Bane', living: false, bountyAmount: 464665464, type: 'Sith', _id: uuid.v4() },
    {firstName: 'Tarre', lastName: 'Vizsla', living: false, bountyAmount: 788446, type: 'Sith', _id: uuid.v4() },
    {firstName: 'Darth', lastName: 'Zannah', living: false, bountyAmount: 12435465, type: 'Sith', _id: uuid.v4()}
];

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– Server Request For Bounties –––––––––––––––––––––––––––––––––––––––––––
bountyRouter
    //  -------------------------------------------------------------- Get All Request
    .get('/', (req, res) => {
        res.status(200);
        res.send(bounties);
        //or res.status(200).send(bounties);
    })
    // --------------------------------------------------------------- Post Request
    .post('/', (req, res) => {
        const newBounty = req.body;
        newBounty._id = uuid.v4();
        bounties.push(newBounty);
        res.status(201).send(`Successfully Added ${newBounty.firstName} ${newBounty.lastName} To The Data Base`);
    })
    // ---------------------------------------------------------------  Get One Request
    bountyRouter.get('/:bountyId', (req, res, next) => {
        const bountyId = req.params.bountyId;
        const singularBounty = bounties.find(bounty => bounty._id === bountyId);
        if(!singularBounty) {
            const error = new Error(`The bounty with this id was NOT FOUND.`)
            res.status(500)
            return next(error)//next means to through the error outside the route and catch it in the next app.use(err,req,res,next)....etc look at the server.js
          }
        res.status(200).send(singularBounty);
    })
    // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– Query Selector For Bounty ––––––––––––––––––––––––––––––––––––––––––––––
    // -------------------------------------------------- Get If Bounty Is Alive
    bountyRouter.get('/search/living', (req, res) => {
        //const isAlive = req.query.isAlive //---- Not Needed But Useful For Other Queries which are not boolean
        const queryliving = bounties.filter(bounty => bounty.living === true);
        res.status(200).send(queryliving);
    })
    
    //--------------------------------------------------- Delete Request
    bountyRouter.delete('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        bounties.splice(bountyIndex, 1);
        res.send(`Deleted Bounty`);
    })
    // ---------------------------------------------------- Update One
    bountyRouter.put('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const updateObject = req.body;
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
        const updatedBounty = Object.assign(bounties[bountyIndex], updateObject);
        res.status(201).send(updatedBounty);//or send('Resource successfully updated')
    })


module.exports = bountyRouter;


/*const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid')

const bounties = [
    { firstName: "Darth", lastName: "Vader", living: true, type: "Sith", _id: uuid.v4() },
    { firstName: "Luke", lastName: "Skywalker", living: true, type: "Jedi", _id: uuid.v4() },
    { firstName: "Obi-Wan", lastName: "Kenobi", living: false, type: "Jedi", _id: uuid.v4() },
    { firstName: "Sheeve", lastName: "Palpatine", living: false, type: "Sith", _id: uuid.v4() },
    { firstName: "Princess", lastName: "Leia", living: true, type: "Jedi", _id: uuid.v4() },
]

bountyRouter.route("/")
//get all
.get((req, res) => {
    res.send(bounties)
})
//post one
.post((req, res) => {
    console.log(req)
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounties.push(newBounty)
    res.send(newBounty)
})
//get one
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})
//delete one
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully killed a bounty!") 
})
//update
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})
module.exports = bountyRouter*/