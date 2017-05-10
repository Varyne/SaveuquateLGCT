
class KittensDb {

    getAll() {
        KittenModel.find({})
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

    adopt(id) {
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
    
}

module.exports = KittensDb;
