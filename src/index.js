const express = require('express');
const path = require('path');
const cors = require('cors');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/kittens')

const db = mongoose.connection

db.on('open', () => {
    console.log("Connected to MongoDB/kittens");
})

// Appel de la classe DefaultController
const DefaultController = require('./controllers/defaultController');
const KittensController = require('./controllers/kittensController');

// Démarrage d'express
const app = express();

// enable cors for *
app.use(cors());

// Instanciationnde la classe default contoller
const defaultController = new DefaultController();
const kittensController = new KittensController();


// Controllers de vues
app.get(`/`, defaultController.home);

// Controllers d'API
app.get(`/api/1.0/kittens`, kittensController.getAllKittens);
app.get('/api/1.0/kittens/adopt', kittensController.getKittensAdopt);
app.get('/api/1.0/kittens/adopted', kittensController.getKittensAdopted);
app.post('/api/1.0/kittens', kittensController.postKittens);
app.put('/api/1.0/kittens/:id/adopted', kittensController.putKittensAdopted);
app.put('/api/1.0/kittens/:id/addtalent', kittensController.putKittensAddTalent);


// Connexion au port 3000
app.listen(3000, () => console.log('Connected on: 3000'));