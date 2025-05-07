import Sequelize  from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando o Model (tabela no banco)
const Produto = connection.define('produtos',{
    //Colunas da tabela
    nome: {
        type: Sequelize.STRING,
        // Permite vazio?
        allowNull:false
    },
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
// Criando uma tabela somante se ainda não
Produto.sync({force:false})
export default Produto;