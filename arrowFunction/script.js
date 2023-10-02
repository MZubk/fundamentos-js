const apresentar = (nome) => `meu nome é ${nome}`;

const soma = (a, b) => a + b;

const somaNumPequenos = (a, b) => {
  if (a > 10 || b > 10) {
    return "somente números de 1 a 9";
  } else {
    return a + b;
  }
};
console.log(somaNumPequenos(soma(4, 4), soma(2, 2)));
