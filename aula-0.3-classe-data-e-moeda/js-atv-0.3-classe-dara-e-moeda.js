class Heroi{

    constructor(nome,vida,velocidade,forca){
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade
    this.forca = forca;
}
correr() {
    return "O herói está correndo"
}
andar(){
    return "O herói está andando"
}
atacar(){
    return "O herói está atacando"
}
defender(){
    return "O herói está defendendo"
}
}

const HomemAranha = new Heroi("Homem-Aranha","100", "160","170");

HomemAranha.teia = 1;

HomemAranha.sentidoAranha = function() {
    return "Ele detectou perigo!"
}

console.log(`Herói: ${HomemAranha.nome}`)
console.log(`Vida: ${HomemAranha.vida}`)
console.log(`Velocidade: ${HomemAranha.velocidade}`)
console.log(`Força: ${HomemAranha.forca}`)
console.log(`Consegue Soltar teia: ${HomemAranha.teia}`)
console.log(HomemAranha.sentidoAranha())

///////////////////////////////////////////////////////////////////////////

const Superman = new Heroi("Superman","500","500","300");

Superman.podeVoar = 1;

Superman.visaoCalor = function(){
    return "Ele está usando sua visão de calor!"
}

console.log(`Herói: ${Superman.nome}`)
console.log(`Vida: ${Superman.vida}`)
console.log(`Velocidade: ${Superman.velocidade}`)
console.log(`Força: ${Superman.forca}`)
console.log(`Consegue Voar: ${Superman.podeVoar}`)
console.log(Superman.visaoCalor())

///////////////////////////////////////////////////////////////////////////

const Batman = new Heroi("Batman","200","150","150");

Batman.esconder = 1;

Batman.investigar = function(){
    return "Ele está investigando um crime!"
}

console.log(`Herói: ${Batman.nome}`)
console.log(`Vida: ${Batman.vida}`)
console.log(`Velocidade: ${Batman.velocidade}`)
console.log(`Força: ${Batman.forca}`)
console.log(`Ele está se escondendo: ${Batman.esconder}`)
console.log(Batman.investigar())
///////////////////////////////////////////////////////////////////////////

const MostrarData = (data) => {
    data.setDate(data.getDate() + 3);
    data.setMonth(data.getMonth() + 2);
    data.setFullYear(data.getFullYear() + 1);

    console.log(
        `Data: ${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
      );
}

const puxarData = new Date();

MostrarData(puxarData);

///////////////////////////////////////////////////////////////////////////
let salario = 1750.30;
console.log(salario.toFixed(2).replace('.',','))
console.log(salario.toLocaleString('pt-br',{style:'currency',currency: "BRL"}))

//Mostrando o salário em DÓLAR (USD) 
const salarioDolar = salario * 0.176 
console.log(
    salarioDolar.toLocaleString("en",{ style: "currency", currency: "USD"})
  );

  //Mostrando o salário em EURO (EUR)
  const salarioEuro = salario * 0.16
console.log(
    salarioEuro.toLocaleString("pt-br",{ style: "currency", currency: "EUR"})
  );

///////////////////////////////////////////////////////////////////////////


const nome = "Vinícius de Souza"

//ALTERANDO PARA LETRA MAIÚSCULAS
console.log(nome.toUpperCase())

//CONTANDO CARACTERES DE UMA STRING
console.log(nome.length)

// REMOVENDO ESPAÇOS
const novoNome = nome.replace(/\s/g, "")
console.log(novoNome)
console.log(novoNome.length)


















