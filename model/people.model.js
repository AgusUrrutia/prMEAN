const mongoose = require('mongoose');




let Schema = mongoose.Schema;

let userSchema = new Schema({
    nombre: {
        type: String,
        required: [true,"El nombre es obligatorio"],
        unique: true
    },
    apellido: {
        type: String,
        required: [true,"El apellido es obligatorio"],
    }


})

module.exports = mongoose.model("personas",userSchema)