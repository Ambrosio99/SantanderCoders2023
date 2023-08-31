// Crie uma função que calcule a soma de dois números.
function somaNum(num1, num2) {
  return num1 + num2;
}
console.log(somaNum(2, 18));

// Escreva uma função que calcule o produto de três números.
function calcProduto(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(calcProduto(10, 5, 20));

// Crie uma função que verifique se um número é par ou ímpar.
function imparOuPar(num) {
  if (num % 2 === 0) {
    return `o número é par`;
  } else {
    return `o número é ímpar`;
  }
}
console.log(imparOuPar(5));

//Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh").
function reverseString(string) {
  return string.split("").reverse().join("");
}
console.log(reverseString("Carro"));

//Crie uma função que retorne o maior valor de um array de números.
const arrayExemplo = [233, 466, 55, 112, 443];
function maiorValor(array) {
  return Math.max(...array);
}
console.log(maiorValor(arrayExemplo));

//Escreva uma função que calcule a média de um array de números.
function mediaArray(array) {
  const calcMedia = array.reduce((total, item) => {
    total = item + total;
    return total;
  }, 0);
  return calcMedia / array.length;
}
console.log(mediaArray(arrayExemplo));

//Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente).
`Utilizando a função anterior de string reversa em conjunto`;
function seraPalindromo(palavra) {
  palavra = palavra.toLowerCase();
  const palavraReversa = reverseString(palavra);
  if (palavra === palavraReversa) {
    return `A palavra é um palíndromo`;
  } else {
    return `A palavra não é um palíndromo`;
  }
}
console.log(seraPalindromo("Reviver"));

//Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string.
function contarLetra(string, letra) {
  let vezesLetra = 0;
  string = string
    .toLowerCase()
    .split("")
    .forEach((item) => {
      if (item === letra) {
        vezesLetra++;
      }
    });
  return `A letra: "${letra}" aparece ${vezesLetra} vezes`;
}
console.log(contarLetra("Finalmente sexta-feira", "e"));

//Crie uma função que calcule o fatorial de um número.
function numFatorial(num) {
  let valorFatorial = num;
  for (let i = num - 1; i > 0; i--) {
    valorFatorial = valorFatorial * i;
  }
  return valorFatorial;
}
console.log(numFatorial(6));
//Escreva uma função que converta graus Celsius para Fahrenheit.
function converterTemperatura(temp) {
  let tempConvertido = 1.8 * temp + 32;
  return `${temp}C convertido para Fahrenheit fica: ${tempConvertido}F`;
}
console.log(converterTemperatura(25));

//Crie uma função que encontre o valor mínimo e máximo em um array de números.
const arrayExemplo2 = [10, 20, 8, 12, 35, 22, 16];
function maiorMenorArray(array) {
  const maiorNumero = Math.max(...array);
  const menorNumero = Math.min(...array);
  return `O maior número dessa array é ${maiorNumero} e o menor é ${menorNumero}`;
}
console.log(maiorMenorArray(arrayExemplo2));

//Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos.
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
// console.log(sequenceFibonacci(55));

//Crie uma função que verifique se um número é primo.
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
console.log(verificarPrimo(5));

//Escreva uma função que remova os elementos duplicados de um array.
const arrayExemplo3 = [1, 2, 2, 3, 4, 5, 5, 6];
function removerIguais(array) {
  return [...new Set(array)];
}
console.log(removerIguais(arrayExemplo3));

//Crie uma função que ordene um array de números em ordem crescente.
// Usarei a arrayExemplo2 = [10, 20, 8, 12, 35, 22, 16]
function arrayCrescente(array) {
  return array.sort((a, b) => a - b);
}
console.log(arrayCrescente(arrayExemplo2));

//Escreva uma função que retorne o número de dias entre duas datas.

//Crie uma função que calcule o raio de um círculo com base em sua área.
function raioCirculo(area) {
  const pi = Math.PI;
  const raioCalc = Math.sqrt(area / pi);
  return raioCalc;
}
console.log(raioCirculo(20));

//Escreva uma função que encontre o segundo maior valor em um array de números.
const arrayExemplo4 = [30, 20, 10, 40, 50];
function segundoMaior(array) {
  array = array.sort((a, b) => b - a);
  return array[1];
}
console.log(segundoMaior(arrayExemplo4));
//Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio.


//Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes).

