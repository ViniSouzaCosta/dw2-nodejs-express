import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

// Definido as relações entre os Models
const defineAssociations = () => {
    // Um cliente possui muitos Pedidos
    Cliente.hasMany(Pedido, { foreignKey: "cliente_id"});
    Pedido.belongsTo(Cliente, { foreignKey: "cliente_id"});
}
export default defineAssociations;