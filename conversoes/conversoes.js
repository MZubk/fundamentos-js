// tipos de dados
// booleans

// conversão implícita

const num = 456;
const numString = Number("456a"); // retorna NaN

// Number() converte string para número
// String() converte número para string

// Podemos usar o operador de soma `+` para fazer a conversão de textos para números

let altura = "5";
let comprimento = "5";

console.log(+altura * +comprimento);

// conversão explicita

// Variáveis e a resposta de tudo

var respostaDeTudo = 42;
let idade = 29;
const pi = 3.14;

{
  var respostaDeTudo = 3.14;
  let idade = 42;
  const pi = 29;
  // const retornara o que foi declarado anterior ao bloco
  // var e let pode ser reatribuído dentro do bloco
  console.log(respostaDeTudo, idade, pi); // return 3.14 42 29
}

console.log(respostaDeTudo, idade, pi); // return 42 29 3.14

// Faça como eu fiz: Variáveis constantes?

// podemos nao declarar a let
let minhaLet;
console.log("'return' " + minhaLet); // return undefined

// deixando para declarar ela depois
minhaLet = "Eu sou um texto";
console.log("'return' " + minhaLet); // return "Eu sou um texto"

minhaLet = 100;
console.log("'return' " + minhaLet); // return 100
