const KittensDb = require('../services/kittens.js');

const kittensDb = new KittensDb;

class KittensController {
    /**
     * @api {get}/api/1.0/kittens Fetch all kittens
     * @apiName GetAll
     * @apiGroup Kittens
     * @apiVersion 0.1.0
     */
    getAllKittens(req, res) {
        kittensDb.getAll()
            .then(result => res.json(result))
            .catch(e => console.log(e));
    }

    /**
     * @api {get}/api/1.0/kittens/adopt Fetch kittens for adoption
     * @apiName getKittensAdopt
     * @apiGroup Kittens
     * @apiVersion 0.1.0
     */
    getKittensAdopt(req, res) {
            kittensDb.getByAdoptStatus(true)
                .then(result => res.json(result))
                .catch(e => console.log(e));
        }
        /**
         * @api {get}/api/1.0/kittens/adopted Fetch adopted kittens
         * @apiName getKittensAdopted
         * @apiGroup Kittens
         * @apiVersion 0.1.0
         */
    getKittensAdopted(req, res) {
            kittensDb.getByAdoptStatus(false)
                .then(result => res.json(result))
                .catch(e => console.log(e));
        }
        /**
         * @api {post}/api/1.0/kittens Create a new kitten
         * @apiName postKittens
         * @apiGroup Kittens
         * @apiVersion 0.1.0
         */
    postKittens(req, res) {
            res.json({ value: 'ajoute un nouveau chat' });
        }
        /**
         * @api {put}/api/1.0/kittens/:id/adopted Set a given kitten as adopted
         * @apiName putKittensAdopted
         * @apiGroup Kittens
         * @apiVersion 0.1.0
         * 
         * @apiParam {String} id Kitten's id
         */
    putKittensAdopted(req, res) {
        kittensDb.getById(req.params.id)
            .then(result => res.json(result))
            .catch(e => console.log(e));
    }
}
/**
 * @api {put}/api/1.0/kittens/:id/addtalent Give selected kitten a new talent
 * @apiName putKittensAddTalent
 * @apiGroup Kittens
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} id Kitten's id
 * @apiParam {String} addtalent New kitten talent
 */
putKittensAddTalent(req, res) {
    res.json({ value: 'ajoute un talent à un chat (modification d\'un chat déjà existant)' });

    kittensDb.addTalent(req.params.id);
}
}

module.exports = KittensController;