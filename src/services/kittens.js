class KittensDb {
    getAll() {
        return KittenModel.find({})
            .then(
                results => { return results }
            ).catch(e => console.error(e))
    }

    getColors() {
        KittenModel.find({}, { color: 1, _id: 0 })
            .then(
                results => { return results }
            ).catch(e => console.error(e))
    }

    getByAdoptStatus(boolean) {
        KittenModel.find({ adopted: boolean }, { name: 1, _id: 0 })
            .then(
                results => { return results }
            ).catch(e => console.error(e))
    }

    getById(id) {
        KittenModel.findById(id)
            .then(
                result => { return result }
            ).catch(e => console.error(e))
    }

    getByName(ReqName) {
        KittenModel.find({ name: ReqName })
            .then(
                result => { return result }
            ).catch(e => console.error(e))
    }

    getByColor(reqColor) {
        KittenModel.find({ color: reqColor })
            .then(
                results => { return results }
            ).catch(e => console.error(e))
    }

    setAdopted(id) {
        KittenModel.update({ _id: id }, { $set: { adopted: true } })
            .then(
                results => { return results }
            ).catch(e => console.error(e))
    }

    addTalent(id, quality) {
        KittenModel.findByIdAndUpdate(id, { $push: { qualities: quality } })
            .then(
                results => { return results }
            ).catch(e => console.error(e))
    }

    setNewKitten(params) {
        let name = params.name
        let color = params.color || null
        let qualities = params.qualities
        let flaw = params.flaw || null
        let foodbrand = params.foodbrand || null

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