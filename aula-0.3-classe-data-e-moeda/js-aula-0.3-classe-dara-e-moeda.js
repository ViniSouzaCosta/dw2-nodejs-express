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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MANIPULANDO DATAS NO JAVASCRIPT
const dataAtual = new Date()
console.log(typeof(dataAtual))

// Pegando o dia atual
const dia = dataAtual.getDate()
console.log(`Hoje é dia ${dia}.`)

//Pegando o mês atual
const mes = dataAtual.getMonth()
console.log(`Estamos no Mês ${mes+1}.`)
//////////////////////////////////////////////////////////
//Trabalhando com moedas no JAVASCR
// Pegando o ano atual
const ano = dataAtual.getFullYear()
console.log(`Ano atual: ${ano}.`)

// Adicionando dias, mêses e anos a data atual
// adicionar 10 dias a data atual:
dataAtual.setDate(dataAtual.getDate() + 10);

//Exibe a nova data:
console.log(`Daqui a 10 dias será dia ${dataAtual.getDate()}.`)

// Adicionar 3 meses a data atual:
dataAtual.setMonth(dataAtual.getMonth()+3);

// Exibe a nova Mês:
console.log(`Daqui a 3 mêses será mês ${dataAtual.getMonth()+1}.`);

// Adicionar 2 anos à data atual
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

// Exibe o novo ano
console.log(`Daqui a 2 anos será ${dataAtual.getFullYear()}.`)
///////////////////////////////IPT
let salario = 2500.30
console.log(salario)
//MOSTRANDO AS CASAS DECIMAIS
console.log(salario.toFixed(2))
// Ocultando as casas decimais
console.log(salario.toFixed(0))
// Alterando marcador de casa decimal
console.log(salario.toFixed(2).replace('.',','))

//Formatação de moedas
//Mostrando o salário em REAL (R$)
console.log(salario.toLocaleString('pt-br',{style:'currency',currency: "BRL"}))

//Mostrando o salário em DÓLAR (USD)
console.log(
  salario.toLocaleString("en",{ style: "currency", currency: "USD"})
);

// CONVERTENDO DE REAL PARA DÓLAR
const salarioDolar = salario * 0.176

console.log(
  salarioDolar.toLocaleString("en",{style: "currency", currency: "USD"})
);

//Mostrando o salário em EURO (EUR)
console.log(
  salario.toLocaleString("pt-br",{ style: "currency", currency: "EUR"})
);
/////////////////////////////////////////////////////////////////////////////////
//FORMATAÇÃO DE STRING
const nome = "Vinícius de Souza"

//ALTERANDO PARA LETRA MAIÚSCULAS
console.log(nome.toUpperCase())

//ALTERANDO PARA LETRA MINÚSCULAS
console.log(nome.toLocaleLowerCase())

//CONTANDO CARACTERES DE UMA STRING
console.log(nome.length)

// REMOVENDO ESPAÇOS
const novoNome = nome.replace(/\s/g, "")
console.log(novoNome)
console.log(novoNome.length)