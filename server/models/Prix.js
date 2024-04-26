const mongoose = require ("mongoose");

const PrixSchema = new mongoose.Schema({
    
    date_deb_promo:{
        type: String,
    },
    date_fin_promo:{
        type: String,
    },
    prix_native:{
        type: Number,
    },
    promo:{
        type: Boolean,
    },
    prix_promotion:{
        type: Number,
    },
    cree_a: {
        type:String,
    },
    mis_a_jour_a: {
        type:String,
    }
    
})

//const PanneauModel = mongoose.model('panneaux', PanneauSchema)
const PrixModel = mongoose.model('prix', PrixSchema, 'prix');

module.exports = PrixModel