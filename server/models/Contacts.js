const mongoose = require("mongoose");

// Définition du schéma du contact
const ContactSchema = new mongoose.Schema({
    nom: {
        type: String,
    },
    email: {
        type: String,
    },
    sujet: {
        type: String,
    },
    message: {
        type: String,
    },
    emetteur: {
        type: String,
    },
    recepteur: {
        type: String,
    }
});

// Définition du modèle basé sur le schéma
const ContactModel = mongoose.model('Contact', ContactSchema, 'contacts');

// Export du modèle
module.exports = ContactModel;
