// Armazenando dados json
let carnes = [];
let bebidas = [];
let vegans = [];
let acomps = [];

// Solicitando os dados do arquivo alimentos.json
fetch("script/alimentos.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (dados) {
    carnes.push(...dados.Carnes);
    bebidas.push(...dados.Bebidas);
    vegans.push(...dados.Vegan);
    acomps.push(...dados.Acomp);
  })
  .catch(function (error) {
    console.error("Ocorreu um erro ao carregar o JSON:", error);
  });

// function de apresentação do calculo final
export default function resultCalc() {
  const buttonCalc = document.getElementById("buttonCalc");
  buttonCalc.addEventListener("click", calcResult);

  function calcResult() {
    let adultoCome = 500;
    let criancaCome = 200;

    let carnesSelecionadas = [];
    let bebidasSelecionadas = [];
    let veganSelecionadas = [];
    let acompSelecionadas = [];

    // Puxando o número de pessoas e quantos vão beber
    const numAdultos = Number(document.getElementById("numAdultos").innerText);
    const numBeber = Number(document.getElementById("numBeber").innerText);
    const numCriancas = Number(document.getElementById("numCriancas").innerText);

    // Carnes selecionadas e forEach para adicionar a array de selecionados
    const listaCarnes = document.querySelectorAll("#lista-carnes li input");
    carnes.forEach((carne) => {
      listaCarnes.forEach((item) => (item.checked ? (carne.id === item.id ? carnesSelecionadas.push(carne) : "") : ""));
    });

    // Bebidas selecionadas e forEach para adicionar a array de selecionados
    const listaBebidas = document.querySelectorAll("#lista-bebidas li input");
    bebidas.forEach((bebida) => {
      listaBebidas.forEach((item) => (item.checked ? (bebida.id === item.id ? bebidasSelecionadas.push(bebida) : "") : ""));
    });

    // Vegan selecionadas e forEach para adicionar a array de selecionados
    const listaVegan = document.querySelectorAll("#lista-vegan li input");
    vegans.forEach((vegan) => {
      listaVegan.forEach((item) => (item.checked ? (vegan.id === item.id ? veganSelecionadas.push(vegan) : "") : ""));
    });

    // Acompanhamentos selecionados e forEach para adicionar a array de selecionados
    const listaAcomp = document.querySelectorAll("#lista-acomp li input");
    acomps.forEach((acomp) => {
      listaAcomp.forEach((item) => (item.checked ? (acomp.id === item.id ? acompSelecionadas.push(acomp) : "") : ""));
    });

    console.log(carnesSelecionadas);
    console.log(bebidasSelecionadas);
    console.log(veganSelecionadas);
    console.log(acompSelecionadas);

    // Calculos apenas

    const numCarnes = carnesSelecionadas.length;
    const totalPeso = numAdultos * adultoCome + numCriancas * criancaCome;

    let totalValor = 0;

    let carnePeso = 0;
    let carneValor = 0;
    let carneTotal = 0;

    // Calculo das carnes e apresentação das mesmas
    carnesSelecionadas.forEach((carne) => {
      carnePeso = totalPeso / numCarnes;
      carneValor = (carnePeso / carne.peso) * carne.preco;
      carneTotal += carneValor;
      console.log(`São ${carnePeso}g de ${carne.id} e o preço médio é de ${parseFloat(carneValor)} reais`);
    });

    // Calculo das bebidas
    bebidasSelecionadas.forEach((bedida) => {});
  }
}
