const express = require ("express");
const router = express.Router();

const PrixModel = require('../models/Prix')
router.get("/", async (req, res)=>{
    const prix = await PrixModel.find();
    res.json(prix)
})

router.get('/promo/:promo', async (req, res) => {
    try {
        const prix = await PrixModel.findOne({  promo: req.params.promo });
        if (!prix) {
            return res.status(404).json({ message: 'The prix with the given promo was not found.' });
        }
        res.status(200).json(prix);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//POST ajouter prix
router.post('/', async (req, res) => { // Utilisez app.post() au lieu de router.post()  
    let prix = new PrixModel({
        date_deb_promo: req.body.date_deb_promo,
        date_fin_promo: req.body.date_fin_promo,
        prix_native: req.body.prix_native,
        promo: req.body.promo,
        prix_promotion: req.body.prix_promotion,
        cree_a: new Date().toISOString(), // Set current date/time as creation date
        mis_a_jour_a: null // No update date initially
    });

    try {
        prix = await prix.save();
        res.send(prix);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The panneau could not be created!');
    }
});

//UPDATE modifier prix
router.put('/:id', async (req, res) => {
    try {
        let prix = await PrixModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!prix) {
            return res.status(404).send('No users with the given ID was found!');
        }
        res.send(prix);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The users could not be updated!');
    }
});

// DELETE supprimer prix
router.delete('/:id', async (req, res) => {
    try {
        let prix = await PrixModel.findByIdAndDelete(req.params.id);
        if (!prix) {
            return res.status(404).send('No prix with the given ID was found!');
        }
        res.send(prix);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The prix could not be deleted!');
    }
});
//get only
router.get("/onlypromo", async (req, res) => {
    try {
        const prix = await PrixModel.find({}, 'promo'); // Seuls les champs' promo' sont renvoyés
        res.json(prix);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});



module.exports= router;
