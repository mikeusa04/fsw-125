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


In this project, you will put into practice the knowledge you’ve gained from the Week 2 material and create your first server.
Create a server that has at least 3 unique endpoints (for example: /movies,  /actors, etc)
Each endpoint should send back a different array of objects when tested.
Endpoints should follow the design principles of REST.
*Note: No frontend is required when testing servers, the functionality can be tested in the browser or in Postman by requesting to the localhost port.*/




const express = require('express');
const app = express();

const PORT = 3000;

let users = [
    {name: 'Mike', location: 'Los Angeles'},
    {name: 'Zeezee', location: 'London'},
    {name: 'Sarah', location: 'San Diego'},
    {name: 'Moe', location: 'India'},
];

let movies = [
    {name: 'Braveheart'},
    {name: 'Star Wars'},
    {name: 'The Godfather'},
    {name: 'Robin Hood'},
];

let actors = [
    {name: 'Mil Gibson'},
    {name: 'Luke Skywalker'},
    {name: 'Al Pacino'},
    {name: 'Kevin Constner'},
];

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/movies', (req, res) => {
    res.send(movies)
})

app.get('/movies/actors', (req, res) => {
    res.send(actors)
})

app.listen(PORT, () => {
    console.log('our first server')
})