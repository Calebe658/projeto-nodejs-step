const { Transform } = require("stream");
const fs = require("fs");

class LogToJsonStream extends Transform {
    constructor() {
        super();
        this.primeiro = true;
    }

    _transform(pedaco, encoding, callback) {
        if (this.primeiro) {
            this.push("[\n");
            this.primeiro = false;
        } else {
            this.push(",\n");
        }

        const linha = pedaco.toString().trim();

        const regex = /\[(.*?)\]\s+(\w+):\s+(.*)/;
        const match = linha.match(regex);

        if (match) {
            const obj = {
                data: match[1],
                nivel: match[2],
                mensagem: match[3],
            };

            this.push("  " + JSON.stringify(obj));
        }

        callback();
    }

    _flush(callback) {
        if (!this.primeiro) {
            this.push("\n]\n");
        } else {
            this.push("[]\n");
        }

        callback();
    }
}

fs.createReadStream("logs/app.log")
    .pipe(new LogToJsonStream())
    .pipe(fs.createWriteStream("logs/app.json"))
    .on("finish", () => {
        console.log("Conversão concluída!");
    });