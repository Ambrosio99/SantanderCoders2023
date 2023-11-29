// Operadores:
// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.
function areaRetangulo(base, altura) {
  resultadoArea = base * altura;
  return `A área do retângulo é ${resultadoArea}`;
}

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).
function parImpar(numero) {
  if (numero % 2 === 0) {
    return `O número é par`;
  } else {
    return `O número é ímpar`;
  }
}

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".
function verificarString(string) {
  if (string.includes("JavaScript")) {
    return `Contém JavaScript`;
  } else {
    return `Não contém JavaScript`;
  }
}

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.
function compararString(string1, string2) {
  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();
  if (string1 == string2) {
    return `Strings iguais`;
  } else {
    return `Strings diferentes`;
  }
}

// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.
function concatArrays(array1, array2) {
  const arrayConcatenada = array1.concat(array2);
  return arrayConcatenada;
}

// Funções Nativas:
// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.
let arrayValores = [20, 60, 80, 40];
const mediaValoresReduce = arrayValores.reduce((acumulador, valor) => {
  valor = valor / arrayValores.length;
  return valor + acumulador;
}, 0);
// console.log(mediaValoresReduce)

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".
function dataHora() {
  const data = new Date();
  const dataFormatada = `Data: ${data.getDate()}/${
    data.getMonth() + 1
  }/${data.getFullYear()} Hora: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  return dataFormatada;
}

// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().
function maiorValor(array) {
  const maiorNumero = Math.max(...array);
  return maiorNumero;
}

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.
function numAleatorio(numMenor, numMaior) {
  return Math.floor(Math.random() * (numMaior - numMenor) + numMenor);
}

// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
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

// Coerção e Tipos de Dados:
// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.
const valor5 = "5";
const valor2 = 2;
const multiplicacao = valor5 * valor2;
// O resultado é 10 pois dependendo do operador aritmético o javascript força a conversão do valor em string para number. caso o valor string tenha letra junto irá retornar NaN pois não há como converter uma letra para número.

// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável.
const valor123 = "123";
const valorConvertido123 = parseInt(valor123);

// 13- Escreva um programa que adicione um número e uma string.
function somarString(numero, string) {
  // string = parseInt(string); --> Limpando um valor string para ser somado com number.
  return numero + string;
}
// 14- Explique o resultado e discuta a coerção que ocorre.
const explicacao13 = `O operador (+) tem regras de coerção diferente dos demais, além da soma de números ele tambem é utilizado para concatenar strings. Logo no caso acima ele da preferencia em concatenar a string ao number.`

// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.
const varNull = null;
const varUndef = undefined;
const verificarTipo = typeof(varNull) === typeof(varUndef) // Retorna false pois null conta como object e undefined como undefined mesmo
const verificarValor = varNull == varUndef // Como comparação não estrita ele vai considerar igual o valor mas com comparação estrita (===) vai ser diferente (false) por conta do tipo.

// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.
function verificarFuncao(funcao) {
  if (typeof(funcao) === "function") {
    return `é uma função`
  } else {
    return `Não é uma função`
  }
} 

// Operadores Matemáticos e Lógicos:
// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.
const resultadoExpressao = (10 + 5) * 3 / 20;
// console.log(resultadoExpressao)

// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.
function imparPositivo(numero) {
  if (numero % 2 === 1 && numero > 0) {
    return `número ímpar e positivo`
  } else {
    return `número invalido`
    }
  }

// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.
function verificarBissexto(ano) {
  if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    return `É ano bissexto`
  } else {
    return `Não é ano bissexto`
  }
}

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).
const listaBanidos = ["Lucas", "Jaque", "Pedro", "Paulo"]
function podeEntrar(nome, idade) {
  if(idade >= 18 && listaBanidos.includes(nome)) {
    return `Pode entrar no clube`
  } else {
    return `Não pode entrar no clube`
  }
}

// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.
const senhaReal = "naoseiasenha";
const idReal = "LucasAmb"
function login(id, senha) {
  if (id === idReal && senha === senhaReal) {
    return `Acesso liberado!`
  } else if (id !== idReal && senha === senhaReal) {
    return `ID incorreto, tente novamente.`
  } else if (id === idReal && senha !== senhaReal) {
    return `Senha incorreta, tente novamente.`
  } else {
    return `Senha e ID incorretos, tente novamente.`
  }
}