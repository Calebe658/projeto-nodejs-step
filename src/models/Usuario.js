const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    idade: {
        type: Number,
    },

    senha: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        default: "user",
    },
});

const Usuario = mongoose.model(
    "Usuario",
    usuarioSchema
);

module.exports = Usuario;