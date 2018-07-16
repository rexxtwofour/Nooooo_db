const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// let hC= require(__dirname + './controller/hockeycontroller')
let hC= require('./controller/hockeycontroller')
app.use( bodyParser.json() );


//adding player
app.post('/api/hockeycontroller', hC.create);


//looking player up 
app.get('/api/hockeycontroller', hC.read);


//changing lineup
app.put('/api/hockeycontroller/:id',hC.update);

//deleteing player
app.delete('/api/hockeycontroller/:id',hC.delete);

const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
