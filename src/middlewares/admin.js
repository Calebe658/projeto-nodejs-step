const admin = (req, res, next) => {

    if (req.usuarioRole !== "admin") {
        return res.status(403).json({
            erro: "Apenas administradores podem realizar esta ação"
        });
    }

    next();
};

module.exports = admin;