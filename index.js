
const http = require('http');

const produtos = [
    'Notebook',
    'Mouse',
    'Teclado',
    'Monitor',
    'Placa de Vídeo'
];

const server = http.createServer((req, res) => {
    const listaProdutos = produtos
        .map((produto) => `<li>${produto}</li>`)
        .join('');

    const html = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Teste Node.js</title>
    </head>
    <body>
      <h1>Lista de Peças</h1>

      <ul>
        ${listaProdutos}
      </ul>
    </body>
    </html>
  `;

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(html);
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
