import Sequelize  from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando o Model (tabela no banco)
const Cliente = connection.define('clientes',{
    //Colunas da tabela
    nome: {
        type: Sequelize.STRING,
        // Permite vazio?
        allowNull:false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
// Criando uma tabela somante se ainda não
Cliente.sync({force:false})
export default Cliente;