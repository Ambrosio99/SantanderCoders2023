// ### Dicionários (Objetos):

// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.
const estudante = {
  nome: "Lucas",
  idade: 23,
  curso: "Front-end Angular",
  notas: [100, 90, 85, 95],
};
console.log(
  "Ex 1. " +
    `Nome:${estudante.nome} // Idade:${estudante.idade} Curso:${estudante.curso}
Principais notas:${estudante.notas[0]} e ${estudante.notas[3]}`
);

// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.
const dicionario = {};
dicionario["Brasil"] = "Brasília";
dicionario["Argentina"] = "Buenos Aires";
dicionario["Japão"] = "Tokyo";

function qualCapital(pais) {
  return dicionario[pais];
}
console.log("Ex 2. " + qualCapital("Japão"));

// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.
const dicionarioFrutas = {};
dicionarioFrutas["Maçã"] = 4;
dicionarioFrutas["Morango"] = 10.5;
dicionarioFrutas["Banana"] = 7.8;

const cestaDeFrutas = ["Maçã", "Banana", "Morango"]; // Assim a pessoa coloca na array o que deseja na sua cesta
function precoTotal() {
  let somaTotal = 0;
  for (let i = 0; i < cestaDeFrutas.length; i++) {
    somaTotal += dicionarioFrutas[cestaDeFrutas[i]];
  }
  return "O total é de R$: " + somaTotal;
}
console.log("Ex 3. " + precoTotal());

// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.
const meuLivro = {
  titulo: "Código perdido",
  autor: "L. Ambrosio",
  ano: 1999,
  idioma: "Português",
};
function sobreLivro() {
  return `O nome do livro é ${meuLivro.titulo}, foi escrito por ${meuLivro.autor}, publicado no ano de ${meuLivro.ano} e disponível no idioma ${meuLivro.idioma}`;
}
console.log("Ex 4. " + sobreLivro());

// ### Map:

// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.
const arrayEx5 = [2, 3, 4, 6, 8, 10];
const newArrayEx5 = arrayEx5.map((item) => {
  return item ** 2;
});
console.log("Ex 5. " + newArrayEx5);

// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.
const arrayEx6 = ["carro", "bola", "celular", "fruta", "aula"];
const newArrayEx6 = arrayEx6.map((item) => {
  return item.charAt(0).toUpperCase();
});
console.log("Ex 6. " + newArrayEx6);

// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).
const arrayEx7 = [
  { nome: "fruta", preço: 3.5, quantidade: 6 },
  { nome: "garrafa", preço: 10, quantidade: 2 },
  { nome: "camiseta", preço: 20, quantidade: 8 },
];
const newArrayEx7 = arrayEx7.map((item) => {
  return item.preço * item.quantidade;
});
console.log("Ex 7. " + newArrayEx7);

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.
const arrayEx8 = [12, 28, 32];
const newArrayEx8 = arrayEx8.map((item) => {
  return (item * 9) / 5 + 32;
});
console.log("Ex 8. " + newArrayEx8);

// ### Reduce:

// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.
const arrayEx9 = [2, 8, 12, 30, 60];
const resultEx9 = arrayEx9.reduce((acumulador, item) => {
  return (acumulador += item);
}, 0);
console.log("Ex. 9 " + resultEx9);

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.
const arrayEx10 = ["Essa", "Vai", "Ser", "Uma", "Frase"];
const resultEx10 = arrayEx10.reduce((acumulador, item) => {
  return (acumulador += item);
});
console.log("Ex. 10 " + resultEx10);

// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.
const arrayEx11 = [
  { valor: 30, categoria: "comida" },
  { valor: 20, categoria: "carro" },
  { valor: 40, categoria: "comida" },
  { valor: 80, categoria: "faculdae" },
  { valor: 12, categoria: "comida" },
];
const resultEx11 = arrayEx11.reduce((acumulador, item) => {
  if (item.categoria === "comida") {
    acumulador += item.valor;
  }
  return acumulador;
}, 0);
console.log("Ex. 11 " + resultEx11);

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.
const arrayEx12 = [8, 20, 32, 95, 45, 12, 26];
const resultEx12 = arrayEx12.reduce((acumulador, item) => {
  if (item > acumulador) {
    acumulador = item;
  }
  return acumulador;
}, 0);
console.log("Ex. 12 " + resultEx12);

// ### Laços de Repetiçoes
// 13- Imprima os números de 1 a 10 utilizando um loop for.
for (let i = 0; i <= 10; i++) {
  // console.log("Ex. 13 " + i);
}

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.
let numberEx15 = 0;
for (let i = 0; i <= 50; i++) {
  numberEx15 += i;
}
console.log("Ex 15. " + numberEx15);

// 16- Imprima a tabuada do 7 utilizando um loop for.
for (let i = 0; i <= 10; i++) {
  // console.log(i * 7);
}

// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.
function exercicio17() {
  let numeroUsuario = Number(prompt("Digite um número"));
  for (let i = 0; i <= numeroUsuario; i++) {
    console.log(i);
  }
}
// exercicio17()

// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.
function exercicio18() {
  let numeroUsuarioPrimo = Number(prompt("Escolha um possível numero primo"));
  function verificarPrimo(numero) {
    if (numero <= 1) {
      return `Não é primo`;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return `Não é primo`;
      }
    }
    return `É primo`;
  }
  const verificacao = verificarPrimo(numeroUsuarioPrimo);
  console.log("Ex 18. " + verificacao);
}
// exercicio18();

// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)
function sequenceFibonacci(termoFinal) {
  let termoAtual = 1;
  let termoSequente = 1;
  while (termoAtual < termoFinal) {
    console.log(termoAtual);
    let termoInt = termoAtual + termoSequente;
    termoSequente = termoAtual;
    termoAtual = termoInt;
  }
}
// sequenceFibonacci(55);

// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.
function numeroFatorial(numero) {
  let fatorial = 1;
  for (let i = numero - 1; i >= 0; i--) {
    fatorial += fatorial * i;
  }
  return fatorial;
}

// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.
function serieEx21(numero) {
  let numSequencia = 0;
  for (let i = 1; i <= numero; i++) {
    numSequencia += i;
    console.log(numSequencia);
  }
}
serieEx21(6);

// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.
function divisores(numero) {
  let numDivisores = [];
  for (let i = 1; i < numero; i++) {
    if (numero % i === 0) {
      numDivisores.push(i);
    }
  }
  return numDivisores;
}

function numerosPerfeitos(init, final) {
  let numPerfeitos = [];
  for (let i = init + 1; i <= final; i++) {
    let numAtual = divisores(i).reduce((acumulador, item) => {
      return (acumulador += item);
    });
    if (numAtual === i) {
      numPerfeitos.push(i);
    }
  }
  console.log(numPerfeitos);
}
numerosPerfeitos(1, 1000);

// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.
function exercicio23() {
  const numAleatorio = Math.floor(Math.random() * 100) + 1;
  let numRecebido;
  while (numRecebido !== numAleatorio) {
    numRecebido = Number(prompt("Digite um número de 0 a 100. num certo para pular->" + numAleatorio));
    if (numAleatorio < numRecebido) {
      alert("Seu palpite foi maior que o número aleatório");
    } else if (numAleatorio > numRecebido) {
      alert("Seu palpite foi menor que o número aleatório");
    } else {
      alert("Parabêns você acertou!");
    }
  }
}
// exercicio23()

// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.
function sequenceFibonacci(termoFinal) {
  let termoAtual = 1;
  let termoSequente = 1;
  while (termoAtual < termoFinal) {
    console.log(termoAtual);
    let termoInt = termoAtual + termoSequente;
    termoSequente = termoAtual;
    termoAtual = termoInt;
  }
}
// sequenceFibonacci(1000) // O mesmo codigo do 19 funciona para essa questão tambem

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.
// Pedir ao usuario para declarar os numeros com , Ex: 30,20,40,80,50. Usando prompt para recolher os números.
function mediaLista(numeros) {
  const numArray = numeros.split(",");
  const somaNumeros = numArray.reduce((acumulador, numero) => {
    numero = Number(numero);
    acumulador += numero;
    return acumulador;
  }, 0);
  const media = somaNumeros / numArray.length;
  return `a média é: ${media}`;
}
console.log("Ex 25. " + mediaLista("10, 15, 20"));

// 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.
`O mesmo código do exercicio 23 funciona para este.`;

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.
function exercicio27() {
  function verificarPrimo27(numero, array) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    array.push(numero);
  }
  let sequenciaPrimos = [];
  const numeroRecebido = Number(prompt("Escolha um número para sequencia de primos."));
  for (let i = 0; i <= numeroRecebido; i++) {
    verificarPrimo27(i, sequenciaPrimos);
  }
  console.log(sequenciaPrimos);
}
// exercicio27()

// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.
function excercicio28() {
  let i = 0;
  let numerosPares = [];
  while (i < 10) {
    i++;
    if (i % 2 === 0) {
      numerosPares.push(i);
    }
  }
  console.log("Ex 28. " + numerosPares);
}
excercicio28();

// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.
function PotenciaDeDois(numero) {
  return (numero & (numero - 1)) === 0;
}
function exercicio29() {
  let numeroUsuario = Number(prompt("Digite um número para verificar se é uma potência de 2:"));
  do {
    if (PotenciaDeDois(numeroUsuario)) {
      console.log(`${numeroUsuario} é uma potência de 2.`);
    } else {
      console.log(`${numeroUsuario} não é uma potência de 2.`);
    }
    numeroUsuario = Number(prompt("Digite outro número para verificar ou digite 0 para sair:"));
  } while (numeroUsuario !== 0);
}
// exercicio29();

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.
function exercicio30() {
  let i = 0;
  let soma = 0;
  while (i < 100) {
    i++;
    soma = i + soma;
  }
  console.log("Ex 30. " + soma);
}
exercicio30();

// ### Condicionais

// 31- Verificação de vogal ou consoante
// Peça ao usuário para digitar uma letra.
// Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante.
// Exiba uma mensagem indicando se a letra é uma vogal ou consoante.
function exercicio31(letra) {
  const vogal = ["A", "E", "I", "O", "U"];
  if (vogal.includes(letra)) {
    console.log(`É uma vogal`);
  } else {
    console.log(`É uma consoante`);
  }
}
// const letraUsuario31 = prompt("Escolha uma letra para verificar se é vogal ou consoante").toUpperCase();
// exercicio31(letraUsuario31);

// 32- Calculadora simples
// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /).
// Use uma estrutura condicional para realizar a operação selecionada nos números dados.
// Exiba o resultado da operação.
function exercicio32() {
  let numero01 = Number(prompt("Digite o primeiro número:"));
  let numero02 = Number(prompt("Digite o segundo número:"));
  let operacao = prompt("Digite qual operação matemática deseja: + = soma, - = subtração, * = multiplicação e / = divisão");
  let calculo;
  switch (operacao) {
    case "+":
      calculo = numero01 + numero02;
      break;
    case "-":
      calculo = numero01 - numero02;
      break;
    case "*":
      calculo = numero01 * numero02;
      break;
    case "/":
      calculo = numero01 / numero02;
      break;
  }
  console.log(calculo);
}
// exercicio32();

// 33- Verificação de número primo
// Peça ao usuário para digitar um número.
// Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo).
// Exiba uma mensagem indicando se o número é primo ou não.
function exercicio33() {
  let numeroUsuarioPrimo = Number(prompt("Escolha um possível numero primo"));
  function verificarPrimo(numero) {
    if (numero <= 1) {
      return `Não é primo`;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return `Não é primo`;
      }
    }
    return `É primo`;
  }
  const verificacao = verificarPrimo(numeroUsuarioPrimo);
  console.log("Ex 33. " + verificacao);
}
// exercicio33();

// 34- Conversão de temperatura
// Peça ao usuário para digitar uma temperatura em graus Celsius.
// Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário.
// Exiba o resultado da conversão.
function exercicio34() {
  const temperaturaUsuario = Number(prompt("Digite uma temperatura em graus Celsius:"));
  const conversaoDesejada = Number(prompt("Escolha para qual deseja converter: Digite (1) para Kelvin ou Digite (2) para Fahrenheit"));
  let temperaturaConvertida;
  if (conversaoDesejada === 1) {
    temperaturaConvertida = temperaturaUsuario + 273;
    console.log(`Temperatura convertida para Kelvin: ${temperaturaConvertida}K`);
  } else if (conversaoDesejada === 2) {
    temperaturaConvertida = 1.8 * temperaturaUsuario + 32;
    console.log(`Temperatura convertida para Fahrenheit: ${temperaturaConvertida}F`);
  }
}
// exercicio34();

// 35- Dia da semana por extenso
// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana.
// Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.
function exercicio35() {
  const diaUsuario = Number(prompt("Escolha um número entre 1 e 7 representando o dia da semana (Exemplo: 1 = Segunda e 7 = Domingo)"));
  switch (diaUsuario) {
    case 1:
      return alert("segunda-feira");
    case 2:
      return alert("terça-feira");
    case 3:
      return alert("quarta-feira");
    case 4:
      return alert("quinta-feira");
    case 5:
      return alert("sexta-feira");
    case 6:
      return alert("sabado");
    case 7:
      return alert("domingo");
  }
}
// exercicio35();

// 36- Verificação de ano bissexto
// Peça ao usuário para digitar um ano.
// Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).
// Exiba uma mensagem indicando se o ano é bissexto ou não.
function exercicio36() {
  const anoUsuario = Number(prompt("Digite um ano para verificação se é bissexto:"));
  function verificarBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      return `É ano bissexto`;
    } else {
      return `Não é ano bissexto`;
    }
  }
  const resultado = verificarBissexto(anoUsuario);
  console.log("Ex 36. " + resultado);
}
// exercicio36();

// 37- Contador de vogais e consoantes
// Peça ao usuário para digitar uma palavra ou frase.
// Use uma estrutura condicional para contar o número de vogais e consoantes na entrada.
// Exiba os resultados separadamente.
function exercicio37() {
  let fraseUsuario = prompt("Digite uma palavra ou frase para contagem de vogais e consoantes:");
  const vogais = ["a", "e", "i", "o", "u"];
  const consoantes = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
  let numeroDeVogais = 0;
  let numeroDeConsoantes = 0;
  fraseUsuario = fraseUsuario.toLowerCase().split("");
  fraseUsuario.forEach((letra) => {
    if (vogais.includes(letra)) {
      numeroDeVogais++;
    } else if (consoantes.includes(letra)) {
      numeroDeConsoantes++;
    }
  });
  console.log(`O número de vogais é: ${numeroDeVogais} e o número de consoantes é: ${numeroDeConsoantes}`);
}
// exercicio37();

// 38- Verificação de número positivo, negativo ou zero
// Peça ao usuário para digitar um número.
// Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero.
// Exiba uma mensagem indicando a natureza do número.
function exercicio38() {
  const numeroUsuario = Number(prompt("Digite um número para verificação"));
  if (numeroUsuario > 0) {
    alert("Esse número é positivo.");
  } else if (numeroUsuario < 0) {
    alert("Esse número é negativo.");
  } else if (numeroUsuario === 0) {
    alert("Definitivamente amigo, isso é um zero.");
  } else {
    alert("Porfavor digite apenas números.");
  }
}
// exercicio38();

// 39- Sistema de bilhete de cinema
// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não").
// Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10.
// Exiba o preço do bilhete.
function exercicio39() {
  const idadeUsuario = Number(prompt("Digite sua idade:"));
  const possuiCartao = prompt("Você possui cartão estudante? (responda com sim ou não)");
  let precoBilhete;
  if (idadeUsuario < 18) {
    precoBilhete = 5;
  } else if (idadeUsuario >= 18 && possuiCartao === "sim") {
    precoBilhete = 8;
  } else {
    precoBilhete = 10;
  }
  alert(`O preço do bilhete ficou: R$ ${precoBilhete}`);
}
// exercicio39();

// 40- Verificação de palíndromo
// Peça ao usuário para digitar uma palavra ou frase.
// Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás).
// Exiba uma mensagem indicando se a entrada é um palíndromo ou não.
function compararArrays(ar1, ar2) {
  for (let i = 0; i <= ar1.length; i++) {
    if (ar1[i] !== ar2[i]) {
      return false;
    }
  }
  return true;
}

function exercicio40() {
  let fraseUsuario = prompt("Digite uma palavra ou frase para verificar se é palíndromo");
  fraseUsuario = fraseUsuario.toLowerCase().trim().split("");
  const fraseReversa = fraseUsuario.slice().reverse();
  if (compararArrays(fraseUsuario, fraseReversa)) {
    alert("É um palíndromo");
  } else {
    alert("Não é um palíndromo");
  }
}
// exercicio40();
