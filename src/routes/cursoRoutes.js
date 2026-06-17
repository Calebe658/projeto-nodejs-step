const express = require("express");

const router = express.Router();

const {
    listarCursos,
    criarCurso,
    deletarCurso,
} = require(
    "../controllers/cursoController"
);

const autenticar = require("../middlewares/autenticar");
const admin = require("../middlewares/admin");

router.get(
    "/cursos",
    listarCursos
);

router.post(
    "/cursos",
    autenticar,
    criarCurso
);

router.delete(
    "/cursos/:id",
    autenticar,
    admin,
    deletarCurso
);

module.exports = router;