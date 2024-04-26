const mongoose = require ("mongoose");
const UserSchema = new mongoose.Schema({
    login:{
        type: String,
    },
    mot_de_passe: {
        type:String,
    },
    etats: {
        type:String,
    },
    nom: {
        type:String,
    }
    
})
const UserModel = mongoose.model('users', UserSchema, 'users');

module.exports = UserModel
