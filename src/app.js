const express = require("express");

const usuarioRoutes = require("./routes/usuarioRoutes");
const produtoRoutes = require("./routes/produtoRoutes");
const arquivoRoutes = require("./routes/arquivoRoutes");
const cursoRoutes = require("./routes/cursoRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(authRoutes);
app.use(produtoRoutes);
app.use(usuarioRoutes);
app.use(arquivoRoutes);
app.use(cursoRoutes);

module.exports = app;