const pool = require("../database/pg");

const listar = async () => {
    const resultado = await pool.query(
        "SELECT * FROM categorias ORDER BY nome"
    );
    return resultado.rows;
};

const criar = async (dados) => {
    const resultado = await pool.query(
        `INSERT INTO categorias (nome, descricao)
     VALUES ($1, $2) RETURNING *`,
        [dados.nome, dados.descricao]
    );
    return resultado.rows[0];
};

const deletar = async (id) => {
    const resultado = await pool.query(
        "DELETE FROM categorias WHERE id = $1 RETURNING *",
        [id]
    );
    return resultado.rows[0];
};

const buscarProdutosPorCategoria = async (categoriaId) => {
    const resultado = await pool.query(
        `SELECT p.*, c.nome AS categoria_nome
     FROM produtos_pg p
     JOIN categorias c ON p.categoria_id = c.id
     WHERE c.id = $1
     ORDER BY p.nome`,
        [categoriaId]
    );
    return resultado.rows;
};

module.exports = { listar, criar, deletar, buscarProdutosPorCategoria };
