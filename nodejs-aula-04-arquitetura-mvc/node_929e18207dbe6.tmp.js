// importando o pacore do Express.js
const express = require("express")
//Carregando o método principal do Express
const app = express(); // Iniciando o Express 

// Iniciando o servidor da aplicação na porta Porta 8080
// O método listen do Express inicia um servidor
app.listen(8080, function(error){
    if(error) {
        console.log("Ocorreu um erro ao iniciar o servidor!" + error)
    }else{
        console.log("Parabéns! Você iniciou seu primeiro servidor Express com Node.js")
    }
});