import Sequelize  from "sequelize";
import connection from "../config/sequelize-config.js";

// Criando o Model (tabela no banco)
const Pedido = connection.define('pedidos',{
    //Colunas da tabela
    numero: {
        type: Sequelize.STRING,
        // Permite vazio?
        allowNull:false
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
});
// Criando uma tabela somante se ainda não
Pedido.sync({force:false})
export default Pedido;