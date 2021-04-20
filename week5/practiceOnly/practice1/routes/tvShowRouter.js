const express = require('express');
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

//fake data
let tvShows = [
    { title:'Mr. Mayor', channel:'TBS', _id: uuidv4() },
    { title:'Snowpiercer', channel:'TNT', _id: uuidv4() },
    { title:'American Gods', channel:'Starz', _id: uuidv4() },
    { title:'The Expanse', channel:'HBO Max', _id: uuidv4() },
];

//routes
tvShowRouter
        .get('/tv-shows', (req, res) => {
            res.send(tvShows)
        })
        .post('/tv-shows', (req, res) => {
            const tvShow = req.body;
            tvShow._id = uuidv4();
            tvShows.push(tvShow);

            console.log(tvShows)
            res.send(`Successfully added ${tvShow.title} to the database`)
        })

module.exports = tvShowRouter; 