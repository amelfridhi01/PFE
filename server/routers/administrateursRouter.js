const express = require ("express");
const router = express.Router();


const AdministrateurModel= require('../models/Administrateurs')

router.get("/", async (req, res)=>{
    const administrateurs = await AdministrateurModel.find();
    res.json(administrateurs)
})

//POST ajouter administrateurs
router.post('/', async (req, res) => { // Utilisez app.post() au lieu de router.post()  
    let administrateur = new AdministrateurModel({
        login: req.body.login,
        mot_de_passe: req.body.mot_de_passe
    });

    try {
        administrateur = await administrateur.save();
        res.send(administrateur);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The administrateur could not be created!');
    }
});

//UPDATE modifier administrateurs
router.put('/:id', async (req, res) => {
    try {
        let administrateurs = await AdministrateurModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!administrateurs) {
            return res.status(404).send('No users with the given ID was found!');
        }
        res.send(administrateurs);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The users could not be updated!');
    }
});


// DELETE supprimer administrateurs
router.delete('/:id', async (req, res) => {
    try {
        let administrateurs = await AdministrateurModel.findByIdAndDelete(req.params.id);
        if (!administrateurs) {
            return res.status(404).send('No administrateurs with the given ID was found!');
        }
        res.send(administrateurs);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The administrateurs could not be deleted!');
    }
});





module.exports= router;

