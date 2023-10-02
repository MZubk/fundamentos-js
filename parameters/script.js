// console.log(soma(5, 5));

// function nomeIdade(nome, idade) {
//   return `meu nome é ${nome} e minha idade é ${idade} anos`;
// }

// console.log(nomeIdade("Murillo", 30));

function soma(a = 0, b = 0) {
  return a + b;
}

function multiplica(a = 1, b = 1) {
  return a * b;
}

function divide(a = 2, b = 2) {
  return a / b;
}

function subtrai(a = 0, b = 0) {
  return a - b;
}

console.log(divide(soma(4, 5), multiplica(4, 5)));

function cumprimentar(pessoa) {
  console.log(`oi! ${pessoa}`);
}

cumprimentar("Ariane");
