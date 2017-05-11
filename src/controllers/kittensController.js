const KittensDb = require('../services/kittens.js');

const kittensDb = new KittensDb;

class KittensController {


    getAllKittens(req, res) { 
        kittensDb.getAll()
        .then( result => res.json(result))
        .catch(e => console.log(e));
    }

    getKittensAdopt(req, res) {
        kittensDb.getByAdoptStatus(true)
        .then( result => res.json(result))
        .catch(e => console.log(e));
    }

    getKittensAdopted(req, res) {
        kittensDb.getByAdoptStatus(false)
        .then(result => res.json(result))
        .catch(e => console.log(e));
    }

    postKittens(req, res) {
        res.json({value: 'ajoute un nouveau chat'});
    }

    putKittensAdopted(req, res) {
        // kittensDb.getById(req.params.id)
        // .then(result => res.json(result))
        // .catch(e => console.log(e));
    }

    putKittensAddTalent(req, res) {
        res.json({value: 'ajoute un talent à un chat (modification d\'un chat déjà existant)'});

        kittensDb.addTalent(req.params.id);
    }
}

module.exports = KittensController;