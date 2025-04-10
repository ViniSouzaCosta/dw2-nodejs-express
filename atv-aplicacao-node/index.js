import express from "express";
const app = express();
app.set('view engine', 'ejs')

app.listen(8082, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})