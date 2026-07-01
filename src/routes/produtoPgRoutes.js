const express = require("express");
const router = express.Router();

const {
    listar,
    criar,
    deletar,
} = require("../controllers/produtoPgController");

const autenticar = require("../middlewares/autenticar");

router.get("/pg/produtos", listar);
router.post("/pg/produtos", autenticar, criar);
router.delete("/pg/produtos/:id", autenticar, deletar);

module.exports = router;