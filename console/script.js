// log => registo

// const minhaVar = true;

// console.log(256);
// console.log("eu sou um texto");
// console.log(minhaVar);

// tratamento de erro!

// const deuRuim = true;

// console.error(new Error("deu ruim aqui!"), deuRuim, minhaVar);

/*
Entre os outros métodos, existem:

console.error() para exibir mensagens de erro;
console.table() para visualizar de forma mais organizada informações tabulares;
console.time() e console.timeEnd() para temporizar período que uma operação de código 
leva para ser iniciada e concluída;
console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos 
chamados) por onde o código executado passou durante a execução.
*/

let area;
let resultado;
let erro = "deu ruim aqui!";

const altura = 5;
const comprimento = 7;

resultado = altura * comprimento;

if (resultado !== 25) {
  console.error(resultado, erro);
} else {
  console.log(resultado);
}
