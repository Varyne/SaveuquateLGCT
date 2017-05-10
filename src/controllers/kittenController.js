class KittenController {


    getAllKittens(req, res) { 
        res.json({value: 'retourne tous les résultats'});

    }

    getKittensAdopt(req, res) {
        res.json({value: 'retourne tous les chats à adopter'});
    }

    getKittensAdopted(req,res) {
        res.json({value: 'retourne tous les chats déjà adoptés'});
    }

    postKittens(req, res) {
        res.json({value: 'ajoute un nouveau chat'});
    }

    putKittensAdopted(req, res) {
        res.json({value: 'modifie la disponibilité d\'un chat'});
    }

    putKittenAddTalent(req, res) {
        res.json({value: 'ajoute un talent à un chat (modification d\'un chat déjà existant)'});
    }
}

module.exports = KittenController;