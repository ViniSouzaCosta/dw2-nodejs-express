// FUNÇÃO SIMPLES
function simples() {
    console.log(`Bem-vindo Vinícius com 21 anos da cidade de Registro!`)
}
simples()

// FUNÇÃO COM PARÂMETROS
function divisao(n1, n2){
    let resultado = n1 / n2;
    console.log("O resultado foi..." + resultado );
}
divisao(10, 2);

// FUNÇÃO COM RETORNO
function retorno(n1,n2,n3){
    return  n1 * n2 * n3;
}
console.log(`O resultado da multiplicação entre os números foi ${retorno(3, 5, 10)}`);

// FUNÇÃO COM MAIS DE UM RETORNO
function maisRT(idade){
    if (idade >=18){
        return `Maior de idade`
    } else {
        return `Menor de idade`
    }
}
let idade = 16
console.log(`Você tem ${idade} e é ${maisRT(idade)}`)

// FUNÇÃO ANÔNIMA

let nota = function(n1,n2){
    media = n1 + n2 / 2
    if (media <= 5){
        return `${media} Reprovado`
    }else {
        return `${media} Aprovado`
    }
}

console.log(nota(3,6));

// ARROW FUNCTION COM PARÂMETRO ÚNICO

const triplo = x => {
    return x * 3;
}
console.log("O triplo do número é " + triplo(5));

// ARROW FUNCTION COM MAIS DE UM PARÂMETRO 
const quatro = (n1, n2, n3, n4) => {
    return n1 + n2 + n3 + n4;
}
console.log(`O resulta da soma entre os quatro é de ${quatro(1,2,3,4)}`);

// IIFE 
const saudacao = (function(nome){
    console.log(`Olá ${nome} bem-vindo!`)
})("Vinícius");