const express = require('express');

const app = express();

app.use(express.json());

const usuarios = [
    {
        id: 1,
        nome: 'Hughie',
        email: 'hughie@email.com'
    },
    {
        id: 2,
        nome: 'William',
        email: 'william@email.com'
    },
    {
        id: 3,
        nome: 'Kimiko',
        email: 'kimiko@email.com'
    }
];

app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.get('/usuarios', (req, res) => {

    res.json(usuarios);
});

app.post('/usuarios', (req, res) => {

    const usuario = req.body;

    usuarios.push(usuario);

    res.status(201).json({
        mensagem: 'Usuário criado',
        usuario
    });
});

app.delete('/usuarios/:id', (req, res) => {

    const id = Number(req.params.id);

    const indiceUsuario = usuarios.findIndex(
        (usuario) => usuario.id === id
    );

    if (indiceUsuario === -1) {

        return res.status(404).json({
            mensagem: 'Usuário não encontrado'
        });
    }

    usuarios.splice(indiceUsuario, 1);

    res.json({
        mensagem: 'Usuário removido'
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});