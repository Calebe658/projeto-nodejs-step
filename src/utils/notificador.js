const EventEmitter = require("events");

class Notificador extends EventEmitter {
    enviarEmail(para, assunto, corpo) {
        const email = { para, assunto, corpo, data: new Date() };
        this.emit("emailEnviado", email);
    }

    enviarSMS(numero, mensagem) {
        const sms = { numero, mensagem, data: new Date() };
        this.emit("smsEnviado", sms);
    }
}

const notificador = new Notificador();

notificador.on("emailEnviado", (email) => {
    console.log("📧 Email enviado!");
    console.log(`  Para: ${email.para}`);
    console.log(`  Assunto: ${email.assunto}`);
    console.log(`  Mensagem: ${email.corpo}`);
});

notificador.on("smsEnviado", (sms) => {
    console.log("📱 SMS enviado!");
    console.log(`  Número: ${sms.numero}`);
    console.log(`  Mensagem: ${sms.mensagem}`);
});

module.exports = notificador;
