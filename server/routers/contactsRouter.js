const express = require("express");
const router = express.Router();
const ContactModel = require("../models/Contacts");

router.get("/", async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.json(contacts);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send('Internal Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        const contact = new ContactModel({
            nom: req.body.nom,
            email: req.body.email,
            sujet: req.body.sujet,
            message: req.body.message,
            emetteur: req.body.emetteur,
            recepteur: req.body.recepteur
        });
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        console.error("Error:", error);
        res.status(400).send('Bad Request');
    }
});

module.exports = router;