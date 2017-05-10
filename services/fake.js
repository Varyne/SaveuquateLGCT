const mongoose = require('mongoose');
const faker = require('faker/locale/fr');

const KittenModel = require('../models/ModelKittens');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/kittens');

const db = mongoose.connection;

db.on('open', () => {
    console.log("Connected to MongoDB/kittens");
    KittenModel.remove({}, function(err) {
        console.log('collection removed')
    });
    seed(50);
});


const seed = (count) => {
    for (var i = 0; i < count; i++) {
        let items = Math.floor((Math.random() * 3) + 1);
        let qualities = []
        for (var j = 0; j < items; j++) {
            qualities.push(faker.company.catchPhraseAdjective())
        }
        console.log(qualities)
        KittenModel.create({
            "name": faker.name.lastName(),
            "color": faker.commerce.color(),
            "qualities": qualities,
            "flaw": faker.hacker.adjective(),
            "foodBrand": faker.company.companyName(),
        });
    }
}