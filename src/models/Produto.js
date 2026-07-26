const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },

    preco: {
        valor: {
            type: Number,
            required: true,
        },

        desconto: {
            type: Number,
            default: 0,
        },

        promocional: {
            type: Number,
            required: true,
        },
    },

    descricao: {
        type: String,
        required: true,
    },

    categoria: {
        type: String,
        required: true,
    },

    marca: {
        type: String,
        required: true,
    },

    fornecedor: {
        nome: {
            type: String,
            required: true,
        },

        cnpj: {
            type: String,
            required: true,
        },
    },

    caracteristicas: {
        sabor: {
            type: String,
            required: true,
        },
    },

    imagem: {
        type: String,
        required: true,
    },

    avaliacao: {
        nota: {
            type: Number,
            default: 0,
        },

        quantidade: {
            type: Number,
            default: 0,
        },
    },

    data_criacao: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("Produto", produtoSchema);