// Armazenando dados json
let carnes = [];
let bebidas = [];
let vegan = [];
let acomp = [];

// Solicitando os dados do arquivo alimentos.json
fetch("script/alimentos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (dados) {
    carnes.push(...dados.Carnes);
    bebidas.push(...dados.Bebidas);
    vegan.push(...dados.Vegan);
    acomp.push(...dados.Acomp);
  })
  .catch(function (error) {
    console.error("Ocorreu um erro ao carregar o JSON:", error);
  });

// function de apresentação do calculo final
export default function resultCalc() {
  // Lista de itens selecionado pelo usuário
  let arrayCarnes = [];
  let arrayBebidas = [];
  let arrayVegan = [];
  let arrayAcomp = [];

  const buttonCalc = document.getElementById("buttonCalc");
  buttonCalc.addEventListener("click", calcResult);

  function calcResult() {
    // Puxando o número de pessoas e quantos vão beber
    const numAdultos = Number(document.getElementById("numAdultos").innerText);
    const numBeber = Number(document.getElementById("numBeber").innerText);
    const numCriancas = Number(document.getElementById("numCriancas").innerText);

    // Carnes selecionadas
    const listaCarnes = document.querySelectorAll("#lista-carnes li input");
    listaCarnes.forEach((carne) => (carne.checked ? arrayCarnes.push(carne.id) : ""));
    // Bebidas selecionadas
    const listaBebidas = document.querySelectorAll("#lista-bebidas li input");
    listaBebidas.forEach((bebida) => (bebida.checked ? arrayBebidas.push(bebida.id) : ""));
    // Vegan selecionadas
    const listaVegan = document.querySelectorAll("#lista-vegan li input");
    listaVegan.forEach((vegan) => (vegan.checked ? arrayVegan.push(vegan.id) : ""));
    // Acompanhamentos selecionados
    const listaAcomp = document.querySelectorAll("#lista-acomp li input");
    listaAcomp.forEach((acomp) => (acomp.checked ? arrayAcomp.push(acomp.id) : ""));
  }
}
