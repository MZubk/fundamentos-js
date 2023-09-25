// unicode

const cifrao = "\u0024";
const aMaiusculo = "\u0041";
const tique = "\u2705";
const hiragana = "\u3041";

// tipos de string

const text1 = "Olá, mundo!";
const password = "senhaSuperSeguraConfia852!";
const numString = "85246";

const quote = "Ariane disse: 'Oi!'";

const whatIsYourName = "Meu nome é ";

const name = "Ariane";

console.log(text1);

console.log(quote);

// concatenação (+)

console.log(whatIsYourName + name);

console.log(
  name + " sua senha possui " + password.length + " caracteres " + tique
);

// templete string ou template literal

// sintaxe `texto inicial ${[ valor ]} e texto final`
const produto = { id: 1, nome: `Grampo`, preco: 34.6 };

const descricao = `${produto.nome} por apenas R$ ${produto.preco}`;

console.log(descricao);
