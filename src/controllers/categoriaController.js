const repository = require("../repositories/categoriaRepository");
const logger = require("../utils/logger");

const listar = async (req, res) => {
    try {
        const categorias = await repository.listar();
        res.json(categorias);

    } catch (erro) {
        logger.erro(erro.message);
        res.status(500).json({ erro: "Erro ao listar categorias" });
    }
};

const produtosPorCategoria = async (req, res) => {
    try {
        const produtos = await repository.buscarProdutosPorCategoria(
            req.params.categoriaId
        );

        res.json(produtos);
    } catch (erro) {
        logger.erro(erro.message);
        res.status(500).json({
            erro: "Erro ao buscar produtos da categoria"
        });
    }
};

const criar = async (req, res) => {
    try {
        const { nome, descricao } = req.body;

        if (!nome || !descricao) {
            return res.status(400).json({
                erro: "O nome e descrição são obrigatórios"
            });
        }

        const categoria = await repository.criar({
            nome,
            descricao
        });

        logger.info(`Categoria criada: ${nome}`);

        res.status(201).json(categoria);
    } catch (erro) {
        logger.erro(`Erro ao criar categoria: ${erro.message}`);
        res.status(500).json({ erro: "Erro ao criar categoria" });
    }
};

const deletar = async (req, res) => {
    try {
        const { id } = req.params;

        const categoria = await repository.deletar(id);

        if (!categoria) {
            return res.status(404).json({ erro: "Categoria não encontrada" });
        }

        res.json({ mensagem: "Categoria removida", categoria });

    } catch (erro) {
        logger.erro(erro.message);
        res.status(500).json({ erro: "Erro ao deletar categoria" });
    }
};

module.exports = { listar, produtosPorCategoria, criar, deletar };