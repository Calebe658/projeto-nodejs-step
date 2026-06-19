const notificador = require("../utils/notificador");

const notificadorMiddleware = (nome, email) => {
    notificador.enviarEmail(
        email,
        "Novo usuário registrado",
        `Olá ${nome} seu e-mail ${email} foi cadastrado com sucesso!`
    );

    const ddd = String(Math.floor(Math.random() * 100)).padStart(2, "0");
    const parte1 = String(Math.floor(Math.random() * 100000)).padStart(5, "0");
    const parte2 = String(Math.floor(Math.random() * 10000)).padStart(4, "0");

    const numero = `(${ddd}) ${parte1}-${parte2}`;

    notificador.enviarSMS(
        numero,
        `Olá ${nome} seu cadastro foi realizado com sucesso!`
    )
}

module.exports = notificadorMiddleware;