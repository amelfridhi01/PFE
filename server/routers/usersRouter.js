const express = require ("express");
const router = express.Router();

const UserModel = require("../models/Users");


router.get("/", async (req, res)=>{
    const users = await UserModel.find();
    res.json(users)
})


//POST ajouter users
router.post('/', async (req, res) => { // Utilisez app.post() au lieu de router.post()  
    let user = new UserModel({
        login: req.body.login,
        mot_de_passe: req.body.mot_de_passe,
        etats: req.body.etats,
        nom: req.body.nom
    });

    try {
        user = await user.save();
        res.send(user);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The panneau could not be created!');
    }
});

//UPDATE modifier users
router.put('/:id', async (req, res) => {
    try {
        let users = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!users) {
            return res.status(404).send('No users with the given ID was found!');
        }
        res.send(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The users could not be updated!');
    }
});

//UPDATE modifier etats users
router.put('/:etats', async (req, res) => {
    try {
        let users = await UserModel.findByIdAndUpdate(req.params.etats, req.body, { new: true });
        if (!users) {
            return res.status(404).send('No users with the given ID was found!');
        }
        res.send(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The users could not be updated!');
    }
});

// DELETE supprimer users
router.delete('/:id', async (req, res) => {
    try {
        let users = await UserModel.findByIdAndDelete(req.params.id);
        if (!users) {
            return res.status(404).send('No users with the given ID was found!');
        }
        res.send(users);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('The users could not be deleted!');
    }
});




module.exports= router;