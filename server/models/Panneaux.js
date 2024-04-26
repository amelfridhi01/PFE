const mongoose = require ("mongoose");

const PanneauSchema = new mongoose.Schema({
    code_face:{
        type: String,
    },
    
    zone:{
        type: String,
    },
    region:{
        type: String,
    },
    emplacement:{
        type: String,
    },
    regie:{
        type: String,
    },
    type:{
        type: String,
    },
    face:{
        type: String,
    },
    eclairage:{
        type: Boolean,
    },
    visibilite:{
        type: String,
    },
    metrage:{
        type: Number,
    },
    prix:{
        type: Number,
    },
    trafic_routier:{
        type: Number,
    },
    photo:{
        type: String,
    },
    position_x:{
        type: Number,
    },
    position_y:{
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
const PanneauModel = mongoose.model('panneaux', PanneauSchema, 'panneaux');

module.exports = PanneauModel

