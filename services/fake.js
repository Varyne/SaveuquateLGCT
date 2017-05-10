const mongoose = require('mongoose');
const faker = require('faker/locale/fr');

const KittenModel = require('../models/kittens')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/kittens')

const db = mongoose.connection

db.on('open', () => {
    console.log("Connected to MongoDB/kittens")

    KittenModel.create([{
            "name": "Alice",
            "color": "Aubergine",
            "qualities": ["Agile"],
            "flaw": "Agressive",
            "foodBrand": "AlloCat",
        },
        {
            "name": "Bob",
            "color": "Brun",
            "qualities": ["Beau", "Bon caractère"],
            "flaw": "Borné",
            "foodBrand": "BibiCroket",
            "adopted": true
        }
    ])

})