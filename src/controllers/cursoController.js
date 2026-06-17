const Curso = require("../models/Curso");

const listarCursos = async (req, res) => {

    const cursos = await Curso.find();

    res.json(cursos);
};

const criarCurso = async (req, res) => {

    const curso = await Curso.create(
        req.body
    );

    res.status(201).json(curso);
};

const deletarCurso = async (req, res) => {

  await Curso.findByIdAndDelete(
    req.params.id
  );

  res.json({
    mensagem: "Curso removido"
  });
};

module.exports = {
    listarCursos,
    criarCurso,
    deletarCurso,
};