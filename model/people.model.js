const mongoose = require('mongoose');




let Schema = mongoose.Schema;

let userSchema = new Schema({
    nameUser: {
        type: String,
        required: [true,"El nombre de usuario es obligatorio"],
        unique: true
    },
    password: {
        type: String,
        required: [true,"La contraseña es obligatoria"],
    },
    email: {
        type: String,
        required: [true,"El email es obligatorio"],
    },
    role: {
        type: String,
        required: [false,"Role"],
    }
})

module.exports = mongoose.model("personas",userSchema)