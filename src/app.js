const express = require('express');

const produtoRoutes = require(
    './routes/produtoRoutes',
);

const usuarioRoutes = require(
    './routes/usuarioRoutes',
);

const app = express();

app.use(express.json());

app.use(produtoRoutes);
app.use(usuarioRoutes);

module.exports = app;
