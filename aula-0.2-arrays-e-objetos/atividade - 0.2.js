//1)
let estados = ["Acre","Alagoas ","Amapá","Amazonas ","Bahia ","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí ","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];
console.log("Exibindo a lista de estados através do forEach com os índices...")
estados.forEach((estados, i) => {
    console.log(`${i + 1} - ${estados}`);
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2)
console.log();
const eu = {
    nome: "Vinícius",
    idade: "21",
    cidade: "Registro",
    hobby: "Jogar vídeogame",
    musica_preferida: "Eletronica"
}

console.log(`Meu nome é ${eu.nome} de ${eu.idade} anos e moro na cidade de ${eu.cidade} meu hobby é ${eu.hobby} e meu gênero de música favorito é ${eu.musica_preferida}`);
console.log();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3)

const filmes = [
    {
        titulo: "O Rei Leão",
        genero: "Animação",
        ano: 1994,
        classificacao: "Livre",
    },
    {
        titulo: "Vingadores:Ultimato",
        genero: "Ação",
        ano: 2019,
        classificacao: "12 anos",
    },
    {
        titulo: "Parasita",
        genero: "Drama",
        ano: 2019,
        classificacao: "16 anos",
    },
    {
        titulo: "Frozen - Uma Aventura COngelante",
        genero: "Animação",
        ano: 2013,
        classificacao: "Livre",
    },
    {
        titulo: "O Lobo de Wall Street",
        genero: "Biografia",
        ano: 2013,
        classificacao: "16 anos",
    },
];

filmes.forEach(filmes => {
    console.log(`Titulo: ${filmes.titulo}`)
    console.log(`Gênero: ${filmes.genero}`)
    console.log(`Ano: ${filmes.ano}`)
    console.log(`Clasificação etária: ${filmes.classificacao}`)
    console.log()

})