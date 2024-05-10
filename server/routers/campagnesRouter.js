const express = require ("express");
const router = express.Router();
const CompagneModel = require('../models/Compagnes')

router.get("/", async (req, res)=>{
    const compagnes = await CompagneModel.find();
    res.json(compagnes)
})


router.get('/nom_annanceur/:nom_annanceur', async (req, res) => {
    try {
        const compagne = await CompagneModel.findOne({ nom_annanceur: req.params.nom_annanceur });
        if (!compagne) {
            return res.status(404).json({ message: 'The compagne with the given nom_annanceur was not found.' });
        }
        res.status(200).json(compagne);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/type_publication/:type_publication', async (req, res) => {
    try {
        const compagne = await CompagneModel.findOne({ type_publication: req.params.type_publication });
        if (!compagne) {
            return res.status(404).json({ message: 'The compagne with the given type_publication was not found.' });
        }
        res.status(200).json(compagne);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/media_vusiel/:media_vusiel', async (req, res) => {
    try {
        const compagne = await CompagneModel.findOne({  media_vusiel: req.params.media_vusiel });
        if (!compagne) {
            return res.status(404).json({ message: 'The compagne with the given medias_vusiels was not found.' });
        }
        res.status(200).json(compagne);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.post('/', async (req, res) => { // Utilisez app.post() au lieu de router.post()  
    let compagne = new CompagneModel({
        // Propriétés de la compagne à partir des données envoyées dans la requête POST
        nom_annanceur: req.body.nom_annanceur,
        type_publication: req.body.type_publication,
        media_vusiel: req.body.media_vusiel,
        date_publication: req.body.date_publication,
        date_retrait: req.body.date_retrait,
        photo: req.body.photo,
        cree_a: new Date().toISOString(), // Définissez la date/heure actuelle comme date de création
        mis_a_jour_a: null // Aucune date de mise à jour initialement
    });

    try {
        compagne = await compagne.save();
        res.send(compagne);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The compagne could not be created!');
    }
});
// DELETE supprimer compagnes
router.delete('/:id', async (req, res) => {
    try {
        let compagnes = await CompagneModel.findByIdAndDelete(req.params.id);
        if (!compagnes) {
            return res.status(404).send('No compagnes with the given ID was found!');
        }
        res.send(compagnes);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The compagnes could not be deleted!');
    }
});
//UPDATE modifier compagne
router.put('/:id', async (req, res) => {
    try {
        let compagnes = await CompagneModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!compagnes) {
            return res.status(404).send('No panneaux with the given ID was found!');
        }
        res.send(compagnes);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The panneaux could not be updated!');
    }
});
// getonly
router.get("/onlynom_annanceur", async (req, res) => {
    try {
        const compagnes = await CompagneModel.find({}, 'nom_annanceur'); // Seuls les champs 'nom_annonceur' sont renvoyés
        res.json(compagnes);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});
router.get("/onlytype_publication", async (req, res) => {
    try {
        const compagnes = await CompagneModel.find({}, 'type_publication'); // Seuls les champs 'type_publication' sont renvoyés
        res.json(compagnes);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});
router.get("/onlymedia_vusiel", async (req, res) => {
    try {
        const compagnes = await CompagneModel.find({}, 'media_vusiel'); // Seuls les champs 'media_vusiel' sont renvoyés
        res.json(compagnes);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});



module.exports= router;