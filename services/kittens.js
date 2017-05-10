const mongoose = require('mongoose');
ObjectId = mongoose.Types.ObjectId

const KittenModel = require('../models/ModelKittens')

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/kittens')

const db = mongoose.connection

db.on('open', () => {
    console.error("Connected to MongoDB/kittens");
})

function getAll() {
    KittenModel.find({})
        .then(
            results => { return results }
        ).catch(e => console.error(e))
}

function getColors() {
    KittenModel.find({}, { color: 1, _id: 0 })
        .then(
            results => { return results }
        ).catch(e => console.error(e))
}

function getByAdoptStatus(boolean) {
    KittenModel.find({ adopted: boolean }, { name: 1, _id: 0 })
        .then(
            results => { return results }
        ).catch(e => console.error(e))
}

function getById(id) {
    KittenModel.findById(id)
        .then(
            result => { return result }
        ).catch(e => console.error(e))
}

function getByName(ReqName) {
    KittenModel.find({ name: ReqName })
        .then(
            result => { return result }
        ).catch(e => console.error(e))
}

function getByColor(reqColor) {
    KittenModel.find({ color: reqColor })
        .then(
            results => { return results }
        ).catch(e => console.error(e))
}

function adopt(id) {
    KittenModel.update({ _id: id }, { $set: { adopted: true } })
        .then(
            results => { return results }
        ).catch(e => console.error(e))
}

function addTalent(id, quality) {
    KittenModel.findByIdAndUpdate(id, { $push: { qualities: quality } })
        .then(
            results => { return results }
        ).catch(e => console.error(e))
}