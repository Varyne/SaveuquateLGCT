const express = require('express');
const path = require('path');

// Appel de la classe DefaultController
const DefaultController = require('./controllers/defaultController');
const KittenController = require('./controllers/kittenController');

// Démarrage d'express
const app = express();

// Instanciationnde la classe default contoller
const defaultController = new DefaultController();
const kittenController = new KittenController();


// Controllers de vues
app.get( `/`, defaultController.home); 

// Controllers d'API
app.get(`/api/1.0/kittens`, kittenController.getAllKittens); 
app.get('/api/1.0/kittens/adopt', kittenController.getKittensAdopt);
app.get('/api/1.0/kittens/adopted', kittenController.getKittensAdopted);
app.post('/api/1.0/kittens', kittenController.postKittens);
app.put('/api/1.0/kittens/:id/adopted', kittenController.putKittensAdopted);
app.put('/api/1.0/kittens/:id/addtalent', kittenController.putKittenAddTalent);

// Connexion au port 3000
app.listen(3000, () => console.log('Connected on: 3000'));