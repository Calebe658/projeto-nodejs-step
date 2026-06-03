const express = require('express');
const router = express.Router();

const {
    listarProduto,
    criarProduto
} = require(
    '../controllers/produtoController'
);

router.get(
    '/produtos',
    listarProduto
);

router.post(
    '/produtos',
    criarProduto
);

module.exports = router;
