// Modo CommonJS de importação:
// const express = require("express");
// Mode ES6 de importação:
import express from "express"
//Carregando o método principal do Express
const app = express(); // Iniciando o Express 

// Importando os Controllers (onde estão as rotas)
import ProdutosController from "./controllers/ProdutosController.js"

//CONFIGURANDO A VIEW ENGINE - EJS
app.set(`view engine`, `ejs`);

// CONFIGURANDO A PASTA "PUBLIC" PARA ARQUIVOS ESTÁTICOS
app.use(express.static('public'));

// Configurando o Expres para  utilizar as rotas dos Controllers
app.use("/", ProdutosController);

// Criando a rota principal (RAIZ) do SITE
//Método .get cria uma rota na aplicação
//REQ -> Trata a requisisão
//RES -> Trata a resposta
app.get("/", (req, res) => {
    res.render("index")
});

// Iniciando o servidor da aplicação na porta Porta 8080
// O método listen do Express inicia um servidor
app.listen(8081, (error) =>{
    if(error) {
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    }else{
        console.log("Servidor iniciado com sucesso!");
    }
});