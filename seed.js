require("dotenv").config();

const { conectar } = require("./src/database/connect");

const Produto = require("./src/models/Produto");

const Usuario = require("./src/models/Usuario");

const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

async function seed() {

    await conectar();

    console.log("MongoDB conectado — populando dados...");

    await Produto.deleteMany({});

    await Usuario.deleteMany({});

    await Produto.insertMany([
        {
            nome: "100% Whey Protein Concentrado",
            preco: {
                valor: 149.90,
                desconto: 15,
                promocional: 127.42
            },
            descricao: "Proteína concentrada para ganho de massa muscular.",
            categoria: "Proteínas",
            marca: "Growth Supplements",
            fornecedor: {
                nome: "Growth Supplements",
                cnpj: "12.345.678/0001-01"
            },
            caracteristicas: {
                sabor: "Chocolate"
            },
            imagem: "https://images.tcdn.com.br/img/img_prod/740836/whey_protein_growth_900g_1.jpg",
            avaliacao: {
                nota: 4.9,
                quantidade: 482
            }
        },
        {
            nome: "Creatina Monohidratada 300g",
            preco: {
                valor: 89.90,
                desconto: 10,
                promocional: 80.91
            },
            descricao: "Creatina pura para aumento de força e desempenho.",
            categoria: "Creatina",
            marca: "Dark Lab",
            fornecedor: {
                nome: "Dark Lab",
                cnpj: "22.345.678/0001-02"
            },
            caracteristicas: {
                sabor: "Sem sabor"
            },
            imagem: "https://images.tcdn.com.br/img/img_prod/740836/creatina_darklab.jpg",
            avaliacao: {
                nota: 4.8,
                quantidade: 615
            }
        },
        {
            nome: "Pré-Treino Égide",
            preco: {
                valor: 99.90,
                desconto: 20,
                promocional: 79.92
            },
            descricao: "Mais energia e foco durante os treinos.",
            categoria: "Pré-Treino",
            marca: "Max Titanium",
            fornecedor: {
                nome: "Max Titanium",
                cnpj: "33.456.789/0001-03"
            },
            caracteristicas: {
                sabor: "Fruit Punch"
            },
            imagem: "https://images.tcdn.com.br/img/img_prod/740836/pre_treino.jpg",
            avaliacao: {
                nota: 4.7,
                quantidade: 314
            }
        },
        {
            nome: "Glutamina 300g",
            preco: {
                valor: 79.90,
                desconto: 12,
                promocional: 70.31
            },
            descricao: "Auxilia na recuperação muscular.",
            categoria: "Glutamina",
            marca: "Integralmedica",
            fornecedor: {
                nome: "Integralmedica",
                cnpj: "44.567.890/0001-04"
            },
            caracteristicas: {
                sabor: "Sem sabor"
            },
            imagem: "https://images.tcdn.com.br/img/img_prod/740836/glutamina.jpg",
            avaliacao: {
                nota: 4.6,
                quantidade: 198
            }
        },
        {
            nome: "BCAA 2400",
            preco: {
                valor: 69.90,
                desconto: 5,
                promocional: 66.40
            },
            descricao: "Aminoácidos essenciais para recuperação muscular.",
            categoria: "Aminoácidos",
            marca: "Probiótica",
            fornecedor: {
                nome: "Probiótica",
                cnpj: "55.678.901/0001-05"
            },
            caracteristicas: {
                sabor: "Sem sabor"
            },
            imagem: "https://images.tcdn.com.br/img/img_prod/740836/bcaa.jpg",
            avaliacao: {
                nota: 4.5,
                quantidade: 146
            }
        },
        {
            nome: "Hipercalórico Mass Titanium",
            preco: {
                valor: 159.90,
                desconto: 15,
                promocional: 135.91
            },
            descricao: "Ideal para ganho de peso e massa muscular.",
            categoria: "Hipercalórico",
            marca: "Max Titanium",
            fornecedor: {
                nome: "Max Titanium",
                cnpj: "66.789.012/0001-06"
            },
            caracteristicas: {
                sabor: "Baunilha"
            },
            imagem: "https://images.tcdn.com.br/img/img_prod/740836/hipercalorico.jpg",
            avaliacao: {
                nota: 4.8,
                quantidade: 231
            }
        },
        {
            nome: "Coenzima Q10",
            preco: {
                valor: 59.90,
                desconto: 10,
                promocional: 53.91
            },
            descricao: "Suplemento antioxidante para energia celular.",
            categoria: "Vitaminas",
            marca: "Vitafor",
            fornecedor: {
                nome: "Vitafor",
                cnpj: "77.890.123/0001-07"
            },
            caracteristicas: {
                sabor: "Sem sabor"
            },
            imagem: "https://images.tcdn.com.br/img/img_prod/740836/coenzima.jpg",
            avaliacao: {
                nota: 4.7,
                quantidade: 109
            }
        },
        {
            nome: "Multivitamínico Daily",
            preco: {
                valor: 49.90,
                desconto: 8,
                promocional: 45.91
            },
            descricao: "Complexo vitamínico completo para o dia a dia.",
            categoria: "Vitaminas",
            marca: "Growth Supplements",
            fornecedor: {
                nome: "Growth Supplements",
                cnpj: "88.901.234/0001-08"
            },
            caracteristicas: {
                sabor: "Sem sabor"
            },
            imagem: "https://images.tcdn.com.br/img/img_prod/740836/multivitaminico.jpg",
            avaliacao: {
                nota: 4.9,
                quantidade: 512
            }
        },
    ]);

    const produtosSalvos = await Produto.find();
    console.log(JSON.stringify(produtosSalvos[0], null, 2));

    console.log("8 produtos inseridos!");

    const senhaHash = await bcrypt.hash("admin123", 10);

    await Usuario.create({

        nome: "Admin",

        email: "admin@email.com",

        senha: senhaHash,

        role: "admin",

    });

    await Usuario.create({

        nome: "Usuário Teste",

        email: "usuario@email.com",

        senha: senhaHash,

        role: "user",

    });

    console.log("Usuários criados!");

    console.log("Admin: admin@email.com / senha: admin123");

    console.log("User:  usuario@email.com / senha: admin123");

    console.log("Banco populado com sucesso!");

    await mongoose.disconnect();

}

seed().catch((erro) => {

    console.error("Erro ao popular banco:", erro);

    process.exit(1);

});
