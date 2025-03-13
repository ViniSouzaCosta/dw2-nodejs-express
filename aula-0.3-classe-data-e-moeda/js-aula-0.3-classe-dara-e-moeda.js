// CLASSES NO JAVASCRIPT
class Carro {
  // Nome de Classes devem iniciar com a primeira letra minúscula.
  //ATRIBUTOS
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // Métodos
  buzinar() {
    return "Beep! Beep!";
  }
}

// Criando uma instância (objeto) da classe Carro
const carroPopular = new Carro("Fiat", "Uno", "2012");
console.log(
  `O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${
    carroPopular.ano
  } e faz ${carroPopular.buzinar()}`
);

// Instância carroEsportivo
const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = "2024";
console.log(
  `O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano ${
    carroEsportivo.ano
  } e faz ${carroEsportivo.buzinar()}`
);

//Adicionar um novo atributo
carroEsportivo.corNeon = "azul";

//Acicionando um novo método
carroEsportivo.turbo = function () {
  return "Vrummm! o carro está acelerando!!!";
};

console.log(
  `O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} tem o neon de cor ${carroEsportivo.corNeon}. ${carroEsportivo.turbo()}`
);
