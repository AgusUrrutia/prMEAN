const mongoose = require('mongoose');




let Schema = mongoose.Schema;

let materialSchema = new Schema({
    autor: {
        type: String,
        required: [true,"El autor es obligatorio"],
        unique: true
    },
    titulo: {
        type: String,
        required: [true,"El titulo es obligatoria"],
    },
    descripcion: {
        type: String,
        required: [true,"La desc es obligatorio"],
    },
    subject: {
        type: String,
        required: [true,"La sub es obligatorio"],
    }
})

module.exports = mongoose.model("materials",materialSchema)