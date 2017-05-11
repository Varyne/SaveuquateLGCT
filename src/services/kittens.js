const KittenModel = require('../models/ModelKittens');

class KittensDb {
    getAll() {

        const promise = new Promise((resolve, reject) => {

            KittenModel.find({})

            .then(results => { resolve(results) })

            .catch(e => reject(e));
        });

        return promise;

        /*
            return KittenModel.find({})
        
            .then(results => { return results })
            .then( .. => ..)
            .catch(e => console.log(e) );
        */

    }

    getColors() {
        return KittenModel.find({}, { color: 1, _id: 0 })
            .then(
                results => { return results }
            );
    }

    getByAdoptStatus(boolean) {
        return KittenModel.find({ adopted: boolean })
            .then(
                results => { return results }
            );
    }

    getById(id) {
        return KittenModel.findById(id)
            .then(
                result => { return result }
            );
    }

    getByName(ReqName) {
        return KittenModel.find({ name: ReqName })
            .then(
                result => { return result }
            )
    }

    getByColor(reqColor) {
        return KittenModel.find({ color: reqColor })
            .then(
                results => { return results }
            )
    }

    setAdopted(id) {
        return KittenModel.update({ _id: id }, { $set: { adopted: true } })
            .then(
                results => { return results }
            )
    }

    addTalent(id, quality) {
        return KittenModel.findByIdAndUpdate(id, { $push: { qualities: quality } })
            .then(
                results => { return results }
            )
    }

    setNewKitten(kitten) {
        let name = kitten.name
        let color = kitten.color || null
        let qualities = kitten.qualities
        let flaw = kitten.flaw || null
        let foodbrand = kitten.foodbrand || null

        KittenModel.create({
            "name": name,
            "color": color,
            "qualities": qualities,
            "flaw": flaw,
            "foodBrand": foodbrand
        });
    }
}

module.exports = KittensDb;