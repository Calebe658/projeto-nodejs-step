const express = require("express");
const router = express.Router();

const {
    listar,
    criar,
    deletar,
    produtosPorCategoria,
} = require("../controllers/categoriaController");

router.get("/pg/categorias", listar);

router.get("/pg/produtos-por-categoria/:categoriaId", produtosPorCategoria);

router.post("/pg/categorias", criar);

router.delete("/pg/categorias/:id", deletar);

module.exports = router;