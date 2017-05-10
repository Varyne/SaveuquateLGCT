const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Kittens = new Schema({
    name: { type: String, required: true },
    color: { type: String },
    quality1: { type: String, required: true },
    quality2: { type: String },
    flaw: { type: String },
    foodBrand: { type: String },
    adopted: { type: Boolean, default: false }
})

module.exports = mongoose.model('Kittens', Kittens)