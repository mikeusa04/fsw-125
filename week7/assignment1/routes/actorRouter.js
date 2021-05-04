 //  ------------------------------------------------------------------ Importing Express
const express = require('express');

//  ------------------------------------------------------------------ Setting actorRouter with express.Router()
const actorRouter = express.Router();

//  ------------------------------------------------------------------ Using uuid To Set A Unique id
const  uuid = require('uuid');

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– Actor Endpoint ––––––––––––––––––––––––––––––––––––––––––––––
const actors = [
    {firstName: 'Mel', lastName: 'Gibson', living: true, age: 65, born: ['New YORK', 'USA', 1956], _id: uuid.v4() },
    {firstName: 'Marilyn', lastName: 'Monroe', living: false, age: 36, born: ['Los Angeles', 'USA', 1926], _id: uuid.v4() },
    {firstName: 'Arnold', lastName: 'Schwarzenegger', living: true, age: 73, born: ['Thal', 'Austria', 1947], _id: uuid.v4() },
    {firstName: 'John', lastName: 'Wayne', living: false, age: 72, born: ['Iowa', 'USA', 1907], _id: uuid.v4() },
    {firstName: 'Sophia', lastName: 'Loren', living: true, age: 86, born: ['Rome', 'Italy', 1934], _id: uuid.v4()}
];

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– Server Request For Actors –––––––––––––––––––––––––––––––––––––––––––
actorRouter
    //  -------------------------------------------------------------- Get All Request
    .get('/', (req, res) => {
        res.status(200);
        res.send(actors);
        //or res.status(200).send(bounties);
    })
    // --------------------------------------------------------------- Post Request
    .post('/', (req, res) => {
        const newActor = req.body;
        newActor._id = uuid.v4();
        actors.push(newActor);
        res.status(201).send(`Successfully Added ${newActor.firstName} ${newActor.lastName} To The Data Base`);
    })
    // ---------------------------------------------------------------  Get One Request
    actorRouter.get('/:actorId', (req, res, next) => {
        const actorId = req.params.actorId;
        const singularActor = actors.find(actor => actor._id === actorId);
        if(!singularActor) {
            const error = new Error(`The actor with this id was NOT FOUND.`)
            res.status(500)
            return next(error)//next means to through the error outside the route and catch it in the next app.use(err,req,res,next)....etc look at the server.js
        }
        res.status(200).send(singularActor);
    })
    // –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– Query Selector For Actor ––––––––––––––––––––––––––––––––––––––––––––––
    // -------------------------------------------------- Get If Actor Is Alive
    actorRouter.get('/search/living', (req, res, next) => {
        const living = req.query.living //---- Not Needed But Useful For Other Queries which are not boolean

        if (living.length == 0) {
            const msg = new Error(`you must provide the living condition ${living}`);
            res.status(200)
            return next(msg)
        }
        try {
            const queryliving = actors.filter(actor => actor.living === living );
            if (!queryliving) {
                const error = new Error("No Values found with living condition false")
                res.status(200)
                return next(error)
            }
            res.status(200).send(queryliving);
        }
        catch {
            const error = new Error("you must provide the living condition")
            res.status(500)
            return next(error)
        }
    })
    
    //--------------------------------------------------- Delete Request
    actorRouter.delete('/:actorId', (req, res) => {
        const actorId = req.params.actorId;
        const actorIndex = actors.findIndex(actor => actor._id === actorId);
        actors.splice(actorIndex, 1);
        res.send(`Deleted Actor`);
    })
    // ---------------------------------------------------- Update One
    actorRouter.put('/:actorId', (req, res) => {
        const actorId = req.params.actorId;
        const updateObject = req.body;
        const actorIndex = actors.findIndex(actor => actor._id === actorId);
        const updatedActor = Object.assign(actors[actorIndex], updateObject);
        res.status(201).send(updatedActor);//or send('Resource successfully updated')
    })


module.exports = actorRouter;


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