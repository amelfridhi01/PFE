const mongoose = require ("mongoose");

const AdministrateurSchema = new mongoose.Schema({
   login:{
        type: String,
    },
    mot_de_passe: {
        type:String,
    }
    
})
const AdministrateurModel = mongoose.model('administrateurs', AdministrateurSchema, 'administrateurs');

module.exports = AdministrateurModel
