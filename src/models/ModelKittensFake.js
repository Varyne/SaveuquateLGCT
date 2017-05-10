const mongoose = require('mongoose');
const fakegoose = require('fakegoose')
const Schema = mongoose.Schema;

const FakeKittens = new Schema({
    name: {
        type: String,
        fake: "name.lastName",
        required: true
    },
    color: {
        type: String,
        fake: "commerce.color"
    },
    qualities: {
        type: Array,
        fake: "company.catchPhraseAdjective",
        required: true
    },
    flaw: {
        type: String,
        fake: "hacker.adjective"
    },
    foodBrand: {
        type: String,
        fake: "company.companyName"
    },
    adopted: {
        type: Boolean,
        fake: "random.boolean",
        default: false
    }
})

FakeKittens.plugin(fakegoose)
module.exports = mongoose.model('FakeKittens', FakeKittens)