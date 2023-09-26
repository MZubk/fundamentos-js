// const idadeMinima = 18;
// const idadeCliente = 18;

// if (idadeCliente >= idadeMinima) {
//   console.log("cerveja");
// } else {
//   console.log("suco");
// }

// condição               //true      //false
// console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");

const nome = "Ariane";
const idade = 2023 - 1995;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "oi, gostaria de beber ${
  idade >= 18 ? bebidaMaior : bebidaMenor
}"`;

console.log(pedido);
