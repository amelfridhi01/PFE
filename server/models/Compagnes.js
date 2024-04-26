const mongoose = require ("mongoose");

const CompagneSchema = new mongoose.Schema({
    nom_annanceur:{
        type: String,
    },  
    type_publication:{
        type: String,
    },
    
    media_vusiel:{
        type: String,
    },
    

    date_publication:{
        type: String,
    },
    date_retrait:{
        type: String,
    },
    photo:{
        type: String,
    },
    cree_a: {
        type:String,
    },
    mis_a_jour_a: {
        type:String,
    }
    
})

//const PanneauModel = mongoose.model('panneaux', PanneauSchema)
const CompagneModel = mongoose.model('compagnes', CompagneSchema, 'compagnes');

module.exports = CompagneModel
