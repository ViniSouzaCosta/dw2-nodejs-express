//Comentário em linha
/* Comentário
em bloco ... */
// Vinicius CRTL + ;

// Declaração de variaáveis no JS.
// CONST x LET X VAR.
// Por questões de segurança evitar o uso de VAR.
// No escopo global CONST não pode ser alterado.

const nome = "Vinícius"; // Uma constante precisa de um valor.
let Nome; // Permite iniciar a variável vazia.

// const nome = "Pedro" -> Resulta em um erro.
// let Nome -> Resulta em um erro.
var cor = "azul";
var cor = "amarelo";
let cidade = "Registro";
cidade = "Jacupiranga"; // Let permite alterar o valor.

const message = "Hello world! iniciando estudos com Javascript";
console.log(message);

// typeof (esse comando exibirá o tipo da variavel)
const estado = "SP";
const idade = 18;
let endereco;
console.log(typeof estado);
console.log(typeof idade);
console.log(typeof endereco);
// o javascript é uma linguagem de tipagem dinamica e tipagem fraca.
// /////////////////////////////////////////////////////////////////////////////////////////

// TIPOS DE FUNÇÕES NO JAVASCRIPT
function minhaFuncao() {}
console.log(typeof minhaFuncao);

//  FUNÇÃO SIMPLES 
function saudacao() {
  console.log("Olá, bem-vindo");
}
saudacao();

//  FUNÇÃO COM PARÂMETRO / ARGUMENTO
// Parâmetro -> É um dado que a função recebe.
// Argumento -> É o dado que é enviado para a função.
function Saudacao(nome) {
  // PARÂMETRO
  console.log("Olá, bem-vindo " + nome); // Concatenando
  // Usando TEMPLATE STRINGS ` `
  console.log(`Olá, bem-vindo ${nome}`);
  //  ${} --> Placeholder (usado pra chamar a variável)
}
Saudacao("Vinícius"); // ARGUMENTO

// FUNÇÂO COM MAIS DE UM PARÂMETRO
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois numeros foi ${resultado}.`);
}
let n1 = 6;
let n2 = 10;
soma(n1, n2);

// FUNÇÃO COM RETORNO
function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`soma dos dois números foi ${Soma(2, 6)}.`);

// FUNÇÃO COM MAIS DE UM RETORNO
function parImpar(n) {
  if (n % 2 == 0) {
    return `Par`;
  } else {
    return `Ímpar`;
  }
}
let num = 4;
console.log(parImpar(num));
console.log(`O número ${num} é ${parImpar(num)}!`);

// FUNÇÃO ANÔNIMA
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`O dobro do número é ${dobro(15)}!`);

// ARROW FUNCTION COM PARÂMETRO ÚNICO
// FUNÇÃO FLECHA
const Dobro = x => {
    return x * 2;
}
console.log(`Função dobro com Arrow Function. Resultado: ${Dobro(20)}.`)

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO
const calc = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da operação é ${calc(6, '*', 6)}.`)

//  SIMPLIFICANDO ARROW FUNCTION
const Calc = (num1, operador, num2) => eval(`${num1} ${operador} ${num2}`)
console.log(`O resultado da operação é ${Calc(7, '*', 7)}.`)

// IIFE - Immediately Invoked Funcition Expression
// Função Imediata - última \o/
const iife = (function() {
    console.log("Estou sendo executada imediatamente...")
})()

// IIFE COM PARÂMETRO
const start = (function(app){ 
    console.log(`Executando imediatamente o app ${app}.`)
})("Whatsapp")

// git add .
// git commit -m "@seu-username"
// git push