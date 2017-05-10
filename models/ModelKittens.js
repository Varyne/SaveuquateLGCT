const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Kittens = new Schema({
    name: { type: String, required: true },
    color: { type: String },
    qualities: { type: Array, required: true },
    flaw: { type: String },
    foodBrand: { type: String },
    adopted: { type: Boolean, default: false }
})

module.exports = mongoose.model('Kittens', Kittens)