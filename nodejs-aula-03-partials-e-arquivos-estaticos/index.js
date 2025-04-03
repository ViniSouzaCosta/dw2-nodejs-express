// importando o pacore do Express.js
const express = require("express")
//Carregando o método principal do Express
const app = express(); // Iniciando o Express 

//CONFIGURANDO A VIEW ENGINE - EJS
app.set(`view engine`, `ejs`)

// CONFIGURANDO A PASTA PUBLIC PARA ARQUIVOS ESTÁTICOS
app.use(express.static('public'));

// Criando a rota principal (RAIZ) do SITE
//Método .get cria uma rota na aplicação
//REQ -> Trata a requisisão
//RES -> Trata a resposta
app.get("/", (req, res) => {
    res.render("index")
});

//ROTA DE PERFIL
app.get("/perfil/:nome?", (req, res) => {
    res.render("perfil")
});

//ROTA DE PRODUTOS
app.get("/produtos/:produto?", (req, res) => {
    //Coletando o parâmetro da rota
    const produto = req.params.produto

    // Array com lista de produtos
    const produtos = ['Computador','Celular','Tablet','Notebook']

    res.render("produtos", {
        //enviando a variaveis para a página
        produto : produto,
        produtos : produtos
    });
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