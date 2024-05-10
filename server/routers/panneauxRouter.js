const express = require ("express");
const router = express.Router();

const PanneauModel = require('../models/Panneaux')

router.get("/", async (req, res)=>{
    const panneaux = await PanneauModel.find();
    res.json(panneaux)
})

router.get('/zone/:zone', async (req, res) => {
    try {
        const panneau = await PanneauModel.findOne({ zone: req.params.zone });
        if (!panneau) {
            return res.status(404).json({ message: 'The panneau with the given zone was not found.' });
        }
        res.status(200).json(panneau);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/region/:region', async (req, res) => {
    try {
        const panneau = await PanneauModel.findOne({ region: req.params.region });
        if (!panneau) {
            return res.status(404).json({ message: 'The panneau with the given region was not found.' });
        }
        res.status(200).json(panneau);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.get('/emplacement/:emplacement', async (req, res) => {
    try {
        const panneau = await PanneauModel.findOne({ emplacement: req.params.emplacement });
        if (!panneau) {
            return res.status(404).json({ message: 'The panneau with the given emplacement was not found.' });
        }
        res.status(200).json(panneau);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/regie/:regie', async (req, res) => {
    try {
        const panneau = await PanneauModel.findOne({ regie: req.params.regie });
        if (!panneau) {
            return res.status(404).json({ message: 'The panneau with the given regie was not found.' });
        }
        res.status(200).json(panneau);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/type/:type', async (req, res) => {
    try {
        const panneau = await PanneauModel.findOne({ type: req.params.type });
        if (!panneau) {
            return res.status(404).json({ message: 'The panneau with the given type was not found.' });
        }
        res.status(200).json(panneau);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/face/:face', async (req, res) => {
    try {
        const panneau = await PanneauModel.findOne({ face: req.params.face });
        if (!panneau) {
            return res.status(404).json({ message: 'The panneau with the given face was not found.' });
        }
        res.status(200).json(panneau);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//POST ajouter panneaux
router.post('/', async (req, res) => {
    let panneau = new PanneauModel({
        code_face: req.body.code_face,
        zone: req.body.zone,
        region: req.body.region,
        emplacement: req.body.emplacement,
        regie: req.body.regie,
        type: req.body.type,
        face: req.body.face,
        eclairage: req.body.eclairage,
        visibilite: req.body.visibilite,
        metrage: req.body.metrage,
        prix: req.body.prix,
        trafic_routier: req.body.trafic_routier,
        photo: req.body.photo,
        position_x: req.body.position_x,
        position_y: req.body.position_y,
        cree_a: new Date().toISOString(), // Set current date/time as creation date
        mis_a_jour_a: null // No update date initially
    });

    try {
        panneau = await panneau.save();
        res.send(panneau);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The panneau could not be created!');
    }
});
// DELETE supprimer panneaux
router.delete('/:id', async (req, res) => {
    try {
        let panneaux = await PanneauModel.findByIdAndDelete(req.params.id);
        if (!panneaux) {
            return res.status(404).send('No panneau with the given ID was found!');
        }
        res.send(panneaux);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The panneau could not be deleted!');
    }
});
//UPDATE modifier panneaux
router.put('/:id', async (req, res) => {
    try {
        let panneaux = await PanneauModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!panneaux) {
            return res.status(404).send('No users with the given ID was found!');
        }
        res.send(panneaux);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The users could not be updated!');
    }
});

// getonly
router.get("/onlyzone", async (req, res) => {
    try {
        const panneaux = await PanneauModel.find({}, 'zone'); // Seuls les champs 'zone' sont renvoyés
        res.json(panneaux);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});
router.get("/onlyregion", async (req, res) => {
    try {
        const panneaux = await PanneauModel.find({}, 'region'); // Seuls les champs 'region' sont renvoyés
        res.json(panneaux);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});
router.get("/onlyemplacement", async (req, res) => {
    try {
        const panneaux = await PanneauModel.find({}, 'emplacement'); // Seuls les champs 'emplacement' sont renvoyés
        res.json(panneaux);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});
router.get("/onlyregie", async (req, res) => {
    try {
        const panneaux = await PanneauModel.find({}, 'regie'); // Seuls les champs 'regie' sont renvoyés
        res.json(panneaux);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});
router.get("/onlytype", async (req, res) => {
    try {
        const panneaux = await PanneauModel.find({}, 'type'); // Seuls les champs 'type' sont renvoyés
        res.json(panneaux);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});
router.get("/onlyface", async (req, res) => {
    try {
        const panneaux = await PanneauModel.find({}, 'face'); // Seuls les champs 'face' sont renvoyés
        res.json(panneaux);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: 'Erreur Interne du Serveur' });
    }
});


module.exports= router;