const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Usuario = require("../models/Usuario");

const JWT_SECRET = process.env.JWT_SECRET || "segredo";

const registrar = async (req, res) => {
    const { nome, email, idade, senha, role } = req.body;

    const existe = await Usuario.findOne({ email });

    if (existe) {
        return res.status(400).json({
            erro: "Email já cadastrado",
        });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({
        nome,
        email,
        idade,
        senha: senhaHash,
        role,
    });

    const token = jwt.sign(
        { id: usuario._id, email: usuario.email, role: usuario.role },
        JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.status(201).json({
        mensagem: "Usuário registrado",
        token,
    });
};

const login = async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ email });

    if (!usuario) {
        return res.status(401).json({
            erro: "Email ou senha inválidos",
        });
    }

    const senhaValida = await bcrypt.compare(
        senha,
        usuario.senha
    );

    if (!senhaValida) {
        return res.status(401).json({
            erro: "Email ou senha inválidos",
        });
    }

    const token = jwt.sign(
        { id: usuario._id, email: usuario.email, role: usuario.role },
        JWT_SECRET,
        { expiresIn: "1d" }
    );

    res.json({
        mensagem: "Login realizado",
        token,
    });
};

module.exports = {
    registrar,
    login,
};