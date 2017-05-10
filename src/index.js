const express = require('express');
const path = require('path');

// Démarrage d'express
const app = express();

// Stockage du chemin vers les routes dans des constantes
const routes = require('./routes/index.js');
const kitten = require('./routes/kitten.js');

// On associe les routes aux paths
app.use('/', routes);
app.use('/kitten', kitten);


app.get( `/`, (req, res) => {
    res.send('Hello world');
}); 