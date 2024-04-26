const mongoose = require ("mongoose");
const ArchiveSchema = new mongoose.Schema({
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
const ArchiveModel = mongoose.model('archives', ArchiveSchema, 'archives');

module.exports = ArchiveModel
