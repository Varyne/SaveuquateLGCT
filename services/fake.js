const mongoose = require('mongoose');
const faker = require('faker/locale/fr');

const KittenModel = require('../models/ModelKittens');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/kittens');

const db = mongoose.connection;

db.on('open', () => {
    console.log("Connected to MongoDB/kittens");
    KittenModel.remove({});
    seed(50);
});

// let items = Math.floor((Math.random() * 3) + 1);
// let qualities = []
// for (var j = 0; j < items; j++) {
//     qualities.push(faker.company.catchPhraseAdjective())
// }

const seed = (count) => {
    for (var i = 0; i < count; i++) {
        KittenModel.create({
            "name": faker.name.lastName(),
            "color": faker.commerce.color(),
            "qualities": faker.company.catchPhraseAdjective(),
            "flaw": faker.hacker.adjective(),
            "foodBrand": faker.company.companyName(),
        });
    }
}