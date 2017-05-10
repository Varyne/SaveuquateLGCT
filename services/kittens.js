const mongoose = require('mongoose');

const KittenModel = require('../models/kittens')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/kittens')

const db = mongoose.connection

db.on('open', () => {
    console.log("Connected to MongoDB/kittens")

    KittenModel.find({})
        .then(
            results => console.log(results)
        ).catch(e => console.log(e))

    KittenModel.find({ color: "Brun" })
        .then(
            results => console.log(results)
        ).catch(e => console.log(e))

})