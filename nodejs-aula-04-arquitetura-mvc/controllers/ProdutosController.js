import express from "express"
// Carregando o método de Express para gerenciamento de Rotas
const router = express.Router();

//ROTA DE PRODUTOS
router.get("/produtos/:produto?", (req, res) => {
    //Coletando o parâmetro da rota
    const produto = req.params.produto

    // Array com lista de produtos
    const produtos = [
        {nome: "Celular Motorola E22", preco: 1200, categoria: "Eletroportáteis"},
        {nome: "Tablet Samsung", preco: 900, categoria: "Eletrônico"},
        {nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores"},
        {nome: "Fone Bluetooh", preco: 150, categoria: "Periféricos"}
];

    res.render("produtos", {
        //enviando a variaveis para a página
        produtos : produtos,
    });
});

// Exportando o módulo
export default router;